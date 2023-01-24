using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Commands.ClearCart
{
    public class ClearCartCommand
    {
        public class Command : IRequest<Result<bool>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<bool>>
        {
            private readonly ICartRepository _cartRepository;

            public Handler(ICartRepository cartRepository)
            {
                _cartRepository = cartRepository;
            }

            public async Task<Result<bool>> Handle(Command request, CancellationToken cancellationToken)
            {
                var result = await _cartRepository.ClearBasketAsync(request.Id);

                return Result<bool>.Success(result);
            }
        }
    }
}