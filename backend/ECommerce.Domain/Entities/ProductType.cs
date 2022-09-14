using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities.Common;

namespace ECommerce.Domain.Entities
{
    public class ProductType : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}