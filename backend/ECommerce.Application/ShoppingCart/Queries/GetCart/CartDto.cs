using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Application.ShoppingCart.Queries.GetCart
{
    public class CartDto : IMapFrom<Cart>
    {
        public Guid Id { get; set; }
        public List<CartItemDto> CartItems { get; set; }
        public Money ShippingPrice { get; set; }
        
        public Guid DeliveryMethodId { get; set; }
        public Guid CustomerId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Cart, CartDto>()
                .ReverseMap();
        }
    }
}