using System;
using System.Text.Json.Serialization;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Application.Product.Queries.GetProductList
{
    public class ProductBriefDto : IMapFrom<ECommerce.Domain.Entities.Product>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
        public bool LocalSeller { get; set; }
        public string BranchCity { get; set; }
        public double SalesNumber { get; set; }

        public Money DefaultPrice { get; set; }

        public void Mapping(Profile profile)
        {
            profile
                .CreateMap<ECommerce.Domain.Entities.Product, ProductBriefDto>()
                .ForMember(x => x.LocalSeller, opt => opt.MapFrom(src => new Random().Next(0, 100) >= 50)) // Interim solution, I need to change later
                .ForMember(x => x.BranchCity, opt => opt.MapFrom(src => src.Branch.City))
                .ForMember(x => x.SalesNumber, opt => opt.MapFrom(src => (double)new Random().Next(0, 10000)))
                .ReverseMap();
        }
    }
}