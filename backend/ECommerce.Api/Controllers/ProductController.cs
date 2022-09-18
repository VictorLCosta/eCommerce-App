using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Product;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    public class ProductController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await Mediator.Send(new List.Query());

            return HandleResult(products);
        }
    }
}