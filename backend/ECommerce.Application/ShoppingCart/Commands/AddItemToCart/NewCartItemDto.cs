using System;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.ShoppingCart.Commands.AddItemToCart
{
    public class NewCartItemDto : IMapFrom<CartItem>
    {
        public Guid Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }

        public void Mapping(Profile profile)
        {
            profile
                .CreateMap<NewCartItemDto, CartItem>()
                .ReverseMap();
        }
    }
}