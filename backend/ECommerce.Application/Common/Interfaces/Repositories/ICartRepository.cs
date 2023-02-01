using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.Common.Interfaces.Repositories
{
    public interface ICartRepository
    {
        Task<List<CartItem>> GetCartItems();
        Task<CartItem> GetCartItem(Guid id);
        Task<CartItem> AddToCart(CartItem item);
        Task<bool> RemoveFromCart(Guid id);
        Task<bool> ClearCart();
    }
}