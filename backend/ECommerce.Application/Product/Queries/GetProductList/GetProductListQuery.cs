using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Mappings;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Product.Queries.GetProductList
{
    public class GetProductListQuery
    {
        public class Query : IRequest<Result<PaginatedList<ProductBriefDto>>> 
        {
            [FromQuery(Name = "pageNumber")]
            public int PageNumber { get; init; } = 1;

            [FromQuery(Name = "pageSize")]
            public int PageSize { get; init; } = 8;
        }

        public class Handler : IRequestHandler<Query, Result<PaginatedList<ProductBriefDto>>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<PaginatedList<ProductBriefDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var products = await _uow.ProductRepository
                    .AsQueryable()
                    .Include(x => x.Branch)
                    .ProjectTo<ProductBriefDto>(_mapper.ConfigurationProvider)
                    .PaginatedListAsync(request.PageNumber, request.PageSize);

                return Result<PaginatedList<ProductBriefDto>>.Success(products);
            }
        }
    }
}