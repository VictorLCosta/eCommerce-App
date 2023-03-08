using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;

namespace ECommerce.Application.Branch.Queries.GetProductBranch
{
    public class GetProductBranchQuery
    {
        public class Query : IRequest<Result<ProductBranchDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<ProductBranchDto>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<ProductBranchDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var branch = await _uow
                    .ProductBranchRepository
                    .Get(request.Id);

                var branchDto = _mapper.Map<ProductBranchDto>(branch);

                return Result<ProductBranchDto>.Success(branchDto);
            }
        }
    }
}