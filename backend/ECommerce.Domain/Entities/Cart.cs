using System;
using System.Collections.Generic;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Domain.Entities
{
    public class Cart
    {
        public Cart()
        {
            
        }

        public Cart(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }
        public List<CartItem> CartItems { get; set; } = new List<CartItem>();
        public Money ShippingPrice { get; set; }
        
        public Guid DeliveryMethodId { get; set; }
        public Guid CustomerId { get; set; }
    }
}