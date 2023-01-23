using System;
using System.Threading.Tasks;
using ECommerce.Domain.Entities.Basket;

namespace ECommerce.Application.Common.Interfaces.Repositories
{
    public interface IBasketRepository
    {
        Task<Basket> GetBasketAsync(Guid basketId);
        Task<Basket> UpdateBasketAsync(Basket basket);
        Task<bool> ClearBasketAsync(Guid basketId);
    }
}