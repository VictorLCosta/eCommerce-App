using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;
using StackExchange.Redis;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;
        private readonly ICurrentUserService _currentUserService;

        public CartRepository(IConnectionMultiplexer multiplexer, ICurrentUserService currentUserService)
        {
            _database = multiplexer.GetDatabase();
            _currentUserService = currentUserService;
        }

        public async Task<List<CartItem>> GetCartItems()
        {
            var serializedCartItems = await _database.HashGetAllAsync($"items:{_currentUserService.UserId}");

            var cartItems = serializedCartItems.Select(x => {
                var cartItem = JsonSerializer.Deserialize<CartItem>(x.Value);
                return cartItem;
            }).ToList();

            return cartItems;
        }

        public async Task<CartItem> GetCartItem(Guid id)
        {
            var serializedRetrievedCartItem = await _database.HashGetAsync($"items:{_currentUserService.UserId}", id.ToString());
            var retrievedCartItem = JsonSerializer.Deserialize<CartItem>(serializedRetrievedCartItem);

            return retrievedCartItem;
        }

        public async Task<CartItem> AddToCart(CartItem item)
        {
            var serializedCartItem = JsonSerializer.Serialize(item);

            var success = await _database.HashSetAsync($"items:{_currentUserService.UserId}", item.Id.ToString(), serializedCartItem);

            return item;
        }

        public async Task<bool> RemoveFromCart(Guid id)
        {
            return await _database.HashDeleteAsync($"items:{_currentUserService.UserId}", id.ToString());
        }

        public async Task<bool> ClearCart()
        {
            return await _database.KeyDeleteAsync($"items:{_currentUserService.UserId}");
        }
    }
}