using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
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
            public Guid ProductId { get; set; } 
        }

        public class Handler : IRequestHandler<Command, Result<NewCartItemDto>>
        {
            private readonly ICartRepository _cartRepository;
            private readonly IUnitOfWork _unitOfWork;
            private readonly IMapper _mapper;

            public Handler(ICartRepository cartRepository, IUnitOfWork unitOfWork, IMapper mapper)
            {
                _cartRepository = cartRepository;
                _unitOfWork = unitOfWork;
                _mapper = mapper;
            }

            public async Task<Result<NewCartItemDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _unitOfWork.ProductRepository.Get(request.ProductId);

                if (product == null) return Result<NewCartItemDto>.Failure("Product not found");

                var cartItem = new CartItem 
                {
                    Id = product.Id,
                    ProductName = product.Name,
                    Price = product.DefaultPrice.Amount,
                    Quantity = 1,
                    PictureUrl = product.PictureUrl
                };

                var savedCartItem = await _cartRepository.AddToCart(cartItem);

                var result = _mapper.Map<NewCartItemDto>(savedCartItem);

                return Result<NewCartItemDto>.Success(result);
            }
        }
    }
}