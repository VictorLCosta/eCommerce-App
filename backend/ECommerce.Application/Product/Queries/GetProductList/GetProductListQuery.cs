using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Product.Queries.GetProductList
{
    public class GetProductListQuery
    {
        public class Query : IRequest<Result<List<ProductBriefDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<ProductBriefDto>>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<List<ProductBriefDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var list = await _uow.ProductRepository
                    .AsQueryable()
                    .Include(x => x.Branch)
                    .ToListAsync();

                var products = _mapper.Map<List<ProductBriefDto>>(list.ToList());

                return Result<List<ProductBriefDto>>.Success(products);
            }
        }
    }
}