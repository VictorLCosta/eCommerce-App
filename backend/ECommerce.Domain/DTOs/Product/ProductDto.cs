using System;
using ECommerce.Domain.Entities.ValueObjects;

namespace ECommerce.Domain.DTOs.Product
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public Money DefaultPrice { get; set; }

        public string BranchName { get; set; }

        public string Type { get; set; }
    }
}