using System.Collections.Generic;
using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities
{
    public class ProductType : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}