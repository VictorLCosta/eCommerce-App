using System;
using System.Threading.Tasks;
using ECommerce.Application.ShoppingCart.Commands.ClearCart;
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Clear(Guid id)
        {
            var result = await Mediator.Send(new ClearCartCommand.Command { Id = id });

            return HandleResult(result);
        }
    }
}