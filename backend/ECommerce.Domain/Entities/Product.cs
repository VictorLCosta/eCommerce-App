using System;
using System.Collections.Generic;
using ECommerce.Domain.Common;
using ECommerce.Domain.ValueObjects;

namespace ECommerce.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public Money DefaultPrice { get; set; }

        public Guid BranchId { get; set; }
        public ProductBranch Branch { get; set; }

        public Guid TypeId { get; set; }
        public ProductType Type { get; set; }

        public IEnumerable<UserLike> UserLikes { get; set; }

        public IEnumerable<Image> Images { get; set; }
        
    }
}