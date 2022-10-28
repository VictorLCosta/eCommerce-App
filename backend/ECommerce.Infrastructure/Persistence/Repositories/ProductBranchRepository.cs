using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class ProductBranchRepository : Repository<ProductBranch>, IProductBranchRepository
    {
        public ProductBranchRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}