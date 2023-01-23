using System;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.Common.Interfaces.Repositories
{
    public interface ICartRepository
    {
        Task<Cart> GetBasketAsync(Guid basketId);
        Task<Cart> UpdateBasketAsync(Cart basket);
        Task<bool> ClearBasketAsync(Guid basketId);
    }
}