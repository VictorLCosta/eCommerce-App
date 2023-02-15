using System;
using System.Collections.Generic;
using ECommerce.Domain.Common;
using ECommerce.Domain.ValueObjects;
using ECommerce.Domain.Enums;

namespace ECommerce.Domain.Entities
{
    public class SalesOrder : BaseEntity
    {
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public DateTimeOffset DeliveryDate { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public ICollection<SalesOrderItem> OrderItems { get; set; }
        public SalesOrderStatus Status { get; set; } = SalesOrderStatus.Pending;
        public decimal? Discount { get; set; }
        public Money Subtotal { get; set; }

        public Guid CustomerId { get; set; }
        public Customer Customer { get; set; }

        public decimal Total 
        {
            get { return Subtotal.Amount + DeliveryMethod.Price; }
        }
    }
}