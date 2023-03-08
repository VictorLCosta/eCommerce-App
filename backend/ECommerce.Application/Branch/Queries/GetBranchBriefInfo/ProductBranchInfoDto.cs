using System;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.Branch.Queries.GetBranchBriefInfo
{
    public class ProductBranchBriefInfoDto : IMapFrom<ProductBranch>
    {
        public Guid Id { get; set; }
        public string PictureUrl { get; set; }
        public string Name { get; set; }
        public int ReviewsCount { get; set; }
        public int ProductsCount { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<ProductBranch, ProductBranchBriefInfoDto>()
                .ForMember(x => x.ProductsCount, opt => opt.MapFrom(src => src.Products.Count))
                .ReverseMap();
        }
    }
}