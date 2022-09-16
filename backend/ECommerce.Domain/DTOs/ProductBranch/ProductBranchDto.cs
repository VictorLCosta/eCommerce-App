using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.DTOs.Product;

namespace ECommerce.Domain.DTOs.ProductBranch
{
    public class ProductBranchDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public string ContactPerson { get; set; }

        public ICollection<ProductDto> Products { get; set; }
    }
}