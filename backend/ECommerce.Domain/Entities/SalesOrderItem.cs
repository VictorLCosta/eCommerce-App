using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities.Common;
using ECommerce.Domain.Entities.ValueObjects;

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