using System;
using System.Threading.Tasks;
using ECommerce.Application.Like.Commands.LikeProduct;
using ECommerce.Application.Like.Commands.UnlikeProduct;
using ECommerce.Application.Like.Queries.GetIsLiked;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    [Authorize]
    public class LikeController : BaseApiController
    {   
        [HttpGet("{productId}/isLiked")]
        public async Task<IActionResult> IsLiked(Guid productId)
        {
            var result = await Mediator.Send(new GetIsLikedQuery.Query { ProductId = productId });

            return HandleResult(result);
        }

        [HttpPost("{productId}/like")]
        public async Task<IActionResult> Favorite(Guid productId) 
        {
            var result = await Mediator.Send(new LikeProductCommand.Command { ProductId = productId });

            return HandleResult(result);
        }

        [HttpDelete("{productId}/unlike")]
        public async Task<IActionResult> Unfavorite(Guid productId) 
        {
            var result = await Mediator.Send(new UnlikeProductCommand.Command { ProductId = productId });

            return HandleResult(result);
        }
    }
}