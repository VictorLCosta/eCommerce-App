using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Commands.IncreaseCartItemQuantity
{
    public class IncreaseCartItemQuantityCommand
    {
        public class Command : IRequest<Result<int>> 
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<int>>
        {
            private readonly ICartRepository _cartRepository;

            public Handler(ICartRepository cartRepository)
            {
                _cartRepository = cartRepository;
            }

            public async Task<Result<int>> Handle(Command request, CancellationToken cancellationToken)
            {
                var cartItem = await _cartRepository.GetCartItem(request.Id);

                cartItem.Quantity++;

                await _cartRepository.AddToCart(cartItem);

                return Result<int>.Success(cartItem.Quantity);
            }
        }
    }
}