using System;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.Product.Queries.GetProductImageList
{
    public class ImageDto : IMapFrom<Image>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}