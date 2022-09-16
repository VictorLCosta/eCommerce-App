using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected readonly ApplicationDbContext _context;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<T> Get(Guid id) 
            => await _context.Set<T>().FirstOrDefaultAsync(x => x.Id == id);

        public async Task<IEnumerable<T>> GetAll()
            => await _context.Set<T>().ToListAsync();

        public async Task<IEnumerable<T>> GetWhere(Expression<Func<T, bool>> predicate)
            => await _context.Set<T>().Where(predicate).ToListAsync();

        public async Task<T> AddAsync(T entity)
        {
            try
            {
                entity.CreatedAt = DateTime.UtcNow;
                var result = await _context.AddAsync(entity);   
            }
            catch (System.Exception)
            {
                throw;
            }
            
            return entity;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            try
            {
                var entity = await _context.Set<T>().SingleOrDefaultAsync(x => x.Id == id);
                if(entity == null)
                    return false;

                var result = _context.Set<T>().Remove(entity);
                return true;
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task<T> UpdateAsync(T entity)
        {
            try
            {
                var result = await _context.Set<T>().SingleOrDefaultAsync(x => x.Id == entity.Id);
                if(result == null)
                    return null;

                entity.UpdatedAt = DateTime.UtcNow;
                entity.CreatedAt = result.CreatedAt;

                _context.Entry(result).State = EntityState.Detached;
                _context.Entry(entity).State = EntityState.Modified;
            }
            catch (System.Exception)
            {
                throw;
            }

            return entity;
        }
    }
}