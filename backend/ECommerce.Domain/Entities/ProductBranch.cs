using System.Collections.Generic;
using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities
{
    public class ProductBranch : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public string ContactPerson { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}