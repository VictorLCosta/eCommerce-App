using System;
using System.Collections.Generic;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Domain.Entities.Basket
{
    public class Basket
    {
        public Basket()
        {
            
        }

        public Basket(Guid id)
        {
            Id = id;
        }

        public Guid Id { get; set; }
        public List<BasketItem> BasketItems { get; set; } = new List<BasketItem>();
        public Money ShippingPrice { get; set; }
        
        public Guid DeliveryMethodId { get; set; }
        public Guid CustomerId { get; set; }
    }
}