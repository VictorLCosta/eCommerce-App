using System;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.ShoppingCart.Queries.GetCart
{
    public class CartItemDto : IMapFrom<CartItem>
    {
        public Guid Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string PictureUrl { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<CartItem, CartItemDto>()
                .ReverseMap();
        }
    }
}