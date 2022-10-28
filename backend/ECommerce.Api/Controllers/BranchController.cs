using System;
using System.Threading.Tasks;
using ECommerce.Application.Branch.Queries;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    public class BranchController : BaseApiController
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var branch = await Mediator.Send(new GetProductBranchQuery.Query { Id = id });

            return HandleResult(branch);
        }
    }
}