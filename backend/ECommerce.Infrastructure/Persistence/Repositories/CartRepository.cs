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

        public async Task<bool> ClearBasketAsync(Guid basketId)
        {
            return await _database.KeyDeleteAsync(basketId.ToString());
        }

        public async Task<Cart> GetBasketAsync(Guid basketId)
        {
            var data = await _database.StringGetAsync(basketId.ToString());
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Cart>(data);
        }

        public async Task<Cart> UpdateBasketAsync(Cart basket)
        {
            var created = await _database.StringSetAsync(basket.Id.ToString(), JsonSerializer.Serialize(basket), TimeSpan.FromDays(15));

            if (!created) return null;

            return await GetBasketAsync(basket.Id);
        }
    }
}