using System;
using System.Threading.Tasks;
using ECommerce.Application.ShoppingCart.Queries.GetCart;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    public class CartController : BaseApiController
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var cart = await Mediator.Send(new GetCartQuery.Query { Id = id });

            return HandleResult(cart);
        }

        [HttpPut]
        public Task<IActionResult> Update()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public Task<IActionResult> Clear(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}