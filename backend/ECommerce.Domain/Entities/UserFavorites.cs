using System;
using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Identity;

namespace ECommerce.Domain.Entities
{
    public class UserFavorite : BaseEntity
    {
        public string UserId { get; set; }
        public Guid ProductId { get; set; }

        public AppUser User { get; set; }
        public Product Product { get; set; }
    }
}