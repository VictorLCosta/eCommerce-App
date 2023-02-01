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

namespace ECommerce.Application.ShoppingCart.Commands.AddItemToCart
{
    public class AddItemToCartCommand
    {
        public class Command : IRequest<Result<NewCartItemDto>> 
        {
            public NewCartItemDto CartItem { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<NewCartItemDto>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _mapper = mapper;
            }

            public async Task<Result<NewCartItemDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var cartItem = _mapper.Map<CartItem>(request.CartItem);

                var result = await _cartRepository.AddToCart(cartItem);

                return Result<NewCartItemDto>.Success(request.CartItem);
            }
        }
    }
}