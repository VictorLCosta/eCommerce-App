using System;
using ECommerce.Domain.Common;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Domain.Entities
{
    public class SalesOrderItem : BaseEntity
    {
        public Guid ProductId { get; set; }

        public Guid SalesOrderId { get; set; }
        public SalesOrder SalesOrder { get; set; }

        public Money Price { get; set; }
        public int Quantity { get; set; }
    }
}