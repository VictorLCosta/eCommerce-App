using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using ECommerce.Domain.ValueObjects;
using FluentValidation;
using MediatR;

namespace ECommerce.Application.Product.Commands.CreateProduct
{
    public class CreateProductCommand
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CreateProductDto Product { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Product).SetValidator(new CreateProductCommandValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = _mapper.Map<ECommerce.Domain.Entities.Product>(request.Product);

                var currency = Currency.FromCode(request.Product.Currency);
                product.DefaultPrice = new Money(currency, request.Product.DefaultPrice);

                await _uow.ProductRepository.AddAsync(product);

                var result = await _uow.Complete();

                if (result) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Failed to create a new product");
            }
        }
    }
}