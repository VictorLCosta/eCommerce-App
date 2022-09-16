using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;

namespace ECommerce.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Complete()
            => await _context.SaveChangesAsync() > 0;

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}