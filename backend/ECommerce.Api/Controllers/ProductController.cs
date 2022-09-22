using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Product.Commands.CreateProduct;
using ECommerce.Application.Product.Queries.GetProduct;
using ECommerce.Application.Product.Queries.GetProductList;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    public class ProductController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await Mediator.Send(new GetProductListQuery.Query());

            return HandleResult(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var product = await Mediator.Send(new GetProductQuery.Query());

            return HandleResult(product);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateProductCommand.Command command)
        {
            var result = await Mediator.Send(command);

            return HandleResult(result);
        }
    }
}