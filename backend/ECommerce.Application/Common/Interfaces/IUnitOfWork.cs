using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IProductRepository ProductRepository { get; }
        IProductBranchRepository ProductBranchRepository { get; }

        Task<bool> Complete();
    }
}