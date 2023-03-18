using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IUnitOfWork : IAsyncDisposable
    {
        IProductRepository ProductRepository { get; }
        IProductBranchRepository ProductBranchRepository { get; }
        IUserLikeRepository UserLikeRepository { get; }
        IImageRepository ImageRepository { get; }

        Task<bool> Complete();
    }
}