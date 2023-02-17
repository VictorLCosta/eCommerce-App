using System;
using System.Threading.Tasks;
using ECommerce.Application.Favorite.Commands.FavoriteProduct;
using ECommerce.Application.Favorite.Commands.UnfavoriteProduct;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    [Authorize]
    public class UserFavoriteController : BaseApiController
    {
        [HttpPost("fav")]
        public async Task<IActionResult> Favorite(Guid productId) 
        {
            var result = await Mediator.Send(new FavoriteProductCommand.Command { ProductId = productId });

            return HandleResult(result);
        }

        [HttpPost("unfav")]
        public async Task<IActionResult> Unfavorite(Guid productId) 
        {
            var result = await Mediator.Send(new UnfavoriteProductCommand.Command { ProductId = productId });

            return HandleResult(result);
        }
    }
}