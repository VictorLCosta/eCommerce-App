using System;

namespace ECommerce.Domain.DTOs.ProductType
{
    public class ProductTypeDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}