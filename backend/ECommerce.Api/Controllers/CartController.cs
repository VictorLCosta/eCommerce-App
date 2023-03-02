using System;
using System.Threading.Tasks;
using ECommerce.Application.ShoppingCart.Queries.GetCartItems;
using ECommerce.Application.ShoppingCart.Commands.ClearCart;
using Microsoft.AspNetCore.Mvc;
using ECommerce.Application.ShoppingCart.Commands.AddItemToCart;
using ECommerce.Application.ShoppingCart.Commands.RemoveFromCart;
using ECommerce.Application.ShoppingCart.Commands.IncreaseCartItemQuantity;
using ECommerce.Application.ShoppingCart.Commands.DecreaseCartItemQuantity;
using Microsoft.AspNetCore.Authorization;

namespace ECommerce.Api.Controllers
{
    [Authorize]
    public class CartController : BaseApiController
    {
        [HttpGet("list")]
        public async Task<IActionResult> GetCartItems()
        {
            var result = await Mediator.Send(new GetCartItemsQuery.Query());

            return HandleResult(result);
        }

        [HttpPost("add/{productId}")]
        public async Task<IActionResult> AddItemToCart(Guid productId)
        {
            var result = await Mediator.Send(new AddItemToCartCommand.Command { ProductId = productId });

            return HandleResult(result);
        }

        [HttpDelete("delete-item/{id}")]
        public async Task<IActionResult> DeleteCartItem(Guid id)
        {
            var result = await Mediator.Send(new RemoveFromCartCommand.Command { Id = id });

            return HandleResult(result);
        }

        [HttpDelete("clear")]
        public async Task<IActionResult> ClearCart()
        {
            var result = await Mediator.Send(new ClearCartCommand.Command());

            return HandleResult(result);
        }

        [HttpPut("increase/{id}")]
        public async Task<IActionResult> IncreaseItemQuantity(Guid id)
        {
            var result = await Mediator.Send(new IncreaseCartItemQuantityCommand.Command { Id = id });

            return HandleResult(result);
        }

        [HttpPut("decrease/{id}")]
        public async Task<IActionResult> DecreaseItemQuantity(Guid id)
        {
            var result = await Mediator.Send(new DecreaseCartItemQuantityCommand.Command { Id = id });

            return HandleResult(result);
        }
    }
}