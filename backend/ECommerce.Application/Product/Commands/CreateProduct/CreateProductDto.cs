using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Mappings;

namespace ECommerce.Application.Product.Commands.CreateProduct
{
    public class CreateProductDto : IMapFrom<ECommerce.Domain.Entities.Product>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public decimal Price { get; set; }

        public Guid BranchId { get; set; }

        public Guid TypeId { get; set; }
    }
}