using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities.Common;
using ECommerce.Domain.Entities.Identity;

namespace ECommerce.Domain.Entities
{
    public class Customer : BaseEntity
    {
        public AppUser User { get; set; }
        public ICollection<SalesOrder> Sales { get; set; }
    }
}