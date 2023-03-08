using System;
using System.Threading.Tasks;
using ECommerce.Application.Branch.Queries.GetBranchBriefInfo;
using ECommerce.Application.Branch.Queries.GetProductBranch;
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

        [HttpGet("info/{id}")]
        public async Task<IActionResult> GetBranchBriefInfo(Guid id)
        {
            var branch = await Mediator.Send(new GetBranchBriefInfoQuery.Query { BranchId = id });

            return HandleResult(branch);
        }
    }
}