using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Infrastructure.Persistence.Repositories;

namespace ECommerce.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        #region Repositories

        public IProductRepository ProductRepository => new ProductRepository(_context);
        public IProductBranchRepository ProductBranchRepository => new ProductBranchRepository(_context);
        public IUserFavoriteRepository UserFavoriteRepository => new UserFavoriteRepository(_context);

        #endregion

        public async Task<bool> Complete()
            => await _context.SaveChangesAsync() > 0;

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}