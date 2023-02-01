using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;
using StackExchange.Redis;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;

        public CartRepository(IConnectionMultiplexer multiplexer)
        {
            _database = multiplexer.GetDatabase();
        }

        public async Task<List<CartItem>> GetCartItems()
        {
            var serializedCartItems = await _database.HashGetAllAsync("items");

            var a = serializedCartItems.Select(x => x.Value);

            var cartItems = serializedCartItems.Select(x => new CartItem {
                Id = Guid.Parse(x.Value),
                ProductName = x.Value,
                Price = (decimal)x.Value,
                Quantity = (int)x.Value,
                PictureUrl = x.Value
            }).ToList();

            return cartItems;
        }

        public async Task<CartItem> GetCartItem(Guid id)
        {
            var serializedRetrievedCartItem = await _database.HashGetAsync("items", id.ToString());
            var retrievedCartItem = JsonSerializer.Deserialize<CartItem>(serializedRetrievedCartItem);

            return retrievedCartItem;
        }

        public async Task<CartItem> AddToCart(CartItem item)
        {
            var serializedCartItem = JsonSerializer.Serialize(item);

            var success = await _database.HashSetAsync("items", item.Id.ToString(), serializedCartItem);

            return item;
        }

        public async Task<bool> RemoveFromCart(Guid id)
        {
            return await _database.HashDeleteAsync("items", id.ToString());
        }

        public async Task<bool> ClearCart()
        {
            return await _database.KeyDeleteAsync("items");
        }
    }
}