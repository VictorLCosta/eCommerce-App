using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Queries.GetCartItems
{
    public class GetCartItemsQuery
    {
        public class Query : IRequest<Result<List<CartItemDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<CartItemDto>>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _mapper = mapper;
            }

            public async Task<Result<List<CartItemDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cartItems = await _cartRepository.GetCartItems();

                return Result<List<CartItemDto>>.Success(_mapper.Map<List<CartItemDto>>(cartItems));
            }
        }
    }
}