using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Queries.GetCartItem
{
    public class GetCartItemQuery
    {
        public class Query : IRequest<Result<CartItemDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<CartItemDto>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _mapper = mapper;
            }

            public async Task<Result<CartItemDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cartItem = await _cartRepository.GetCartItem(request.Id);

                return Result<CartItemDto>.Success(_mapper.Map<CartItemDto>(cartItem));
            }
        }
    }
}