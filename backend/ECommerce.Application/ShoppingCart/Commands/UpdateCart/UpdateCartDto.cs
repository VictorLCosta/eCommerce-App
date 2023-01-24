using System;
using System.Collections.Generic;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Application.ShoppingCart.Commands.UpdateCart
{
    public class UpdateCartDto : IMapFrom<Cart>
    {
        public Guid Id { get; set; }
        public List<UpdateCartItemDto> CartItems { get; set; }
        public Money ShippingPrice { get; set; }
        
        public Guid DeliveryMethodId { get; set; }
        public Guid CustomerId { get; set; }

        public void Mapping(Profile profile) 
        {
            profile.CreateMap<Cart, UpdateCartDto>()
                .ReverseMap();
        }
    }
}