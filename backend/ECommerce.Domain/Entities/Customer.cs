using System.Collections.Generic;
using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Identity;

namespace ECommerce.Domain.Entities
{
    public class Customer : BaseEntity
    {
        public AppUser User { get; set; }
        public ICollection<SalesOrder> Sales { get; set; }
    }
}