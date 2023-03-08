using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Branch.Queries.GetBranchBriefInfo
{
    public class GetBranchBriefInfoQuery
    {
        public class Query : IRequest<Result<ProductBranchBriefInfoDto>>
        {
            public Guid BranchId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<ProductBranchBriefInfoDto>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<ProductBranchBriefInfoDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var branchInfo = await _uow
                    .ProductBranchRepository
                    .AsQueryable(x => x.Id == request.BranchId)
                    .Include(x => x.Products)
                    .ProjectTo<ProductBranchBriefInfoDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync();

                if (branchInfo == null) return Result<ProductBranchBriefInfoDto>.Failure("Branch not found");

                return Result<ProductBranchBriefInfoDto>.Success(branchInfo);
            }
        }
    }
}