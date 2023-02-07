using System;

namespace ECommerce.Application.Product.Queries.SearchProducts
{
    public class SearchResultDto
    {
        public Guid Id { get; set; }
        public string BrandName { get; set; }
        public string PictureUrl { get; set; }
        public string ProductName { get; set; }
        public string Url { get; set; }
    }
}