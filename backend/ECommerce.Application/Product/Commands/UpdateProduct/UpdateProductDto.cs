using System;
using AutoMapper;
using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Enums;

namespace ECommerce.Application.Product.Commands.UpdateProduct
{
    public class UpdateProductDto : IMapFrom<ECommerce.Domain.Entities.Product>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public Currency Currency { get; set; }
        public decimal DefaultPrice { get; set; }

        public Guid BranchId { get; set; }

        public Guid TypeId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateProductDto, ECommerce.Domain.Entities.Product>()
                .ReverseMap();
        }
    }

}