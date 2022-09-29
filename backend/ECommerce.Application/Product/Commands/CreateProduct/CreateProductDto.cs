using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Mappings;

namespace ECommerce.Application.Product.Commands.CreateProduct
{
    public class CreateProductDto : IMapFrom<ECommerce.Domain.Entities.Product>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public string Currency { get; set; }
        public decimal DefaultPrice { get; set; }

        public Guid BranchId { get; set; }

        public Guid TypeId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<CreateProductDto, ECommerce.Domain.Entities.Product>()
                .ForMember(x => x.DefaultPrice, opt => opt.Ignore())
                .ReverseMap();
        }
    }
}