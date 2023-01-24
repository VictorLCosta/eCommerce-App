using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using ECommerce.Domain.Entities;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Queries.GetCart
{
    public class GetCartQuery
    {
        public class Query : IRequest<Result<CartDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<CartDto>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _mapper = mapper;
            }

            public async Task<Result<CartDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cart = await _cartRepository.GetBasketAsync(request.Id);

                var result = cart ?? new Cart(Guid.NewGuid());

                return Result<CartDto>.Success(_mapper.Map<CartDto>(result));
            }
        }

    }
}