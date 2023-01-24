using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Application.Common.Models;
using ECommerce.Domain.Entities;
using MediatR;

namespace ECommerce.Application.ShoppingCart.Commands.UpdateCart
{
    public class UpdateCartCommand
    {
        public class Command : IRequest<Result<UpdateCartDto>>
        {
            public UpdateCartDto Cart { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<UpdateCartDto>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _mapper = mapper;
            }

            public async Task<Result<UpdateCartDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var cart = _mapper.Map<UpdateCartDto, Cart>(request.Cart);

                var updatedCart = await _cartRepository.UpdateBasketAsync(cart);

                var result = _mapper.Map<Cart, UpdateCartDto>(updatedCart);

                return Result<UpdateCartDto>.Success(result);
            }
        }
    }
}