using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Domain.DTOs.Product;
using ECommerce.Domain.DTOs.ProductBranch;
using ECommerce.Domain.DTOs.ProductType;
using ECommerce.Domain.Entities;

namespace ECommerce.CrossCutting.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(x => x.BranchName, opt => opt.MapFrom(src => src.Branch.Name))
                .ForMember(x => x.BranchName, opt => opt.MapFrom(src => src.Branch.Name))
                .ReverseMap();

            CreateMap<ProductBranch, ProductBranchDto>()
                .ReverseMap();

            CreateMap<ProductType, ProductTypeDto>()
                .ReverseMap();
        }
    }
}