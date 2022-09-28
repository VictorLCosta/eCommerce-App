using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using FluentValidation;
using MediatR;

namespace ECommerce.Application.Product.Commands.DeleteProduct
{
    public class DeleteProductCommand
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Id).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly IUnitOfWork _uow;

            public Handler(IUnitOfWork uow)
            {
                _uow = uow;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var result = await _uow.ProductRepository.DeleteAsync(request.Id);

                if (!result) return Result<Unit>.Failure("Product not found");

                await _uow.Complete();

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}