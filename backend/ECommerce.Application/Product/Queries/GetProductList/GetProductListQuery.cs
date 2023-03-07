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
            private readonly ICurrentUserService _currentUserService;

            public Handler(IUnitOfWork uow, IMapper mapper, ICurrentUserService currentUserService)
            {
                _uow = uow;
                _mapper = mapper;
                _currentUserService = currentUserService;
            }

            public async Task<Result<PaginatedList<ProductBriefDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var userId = _currentUserService.UserId;

                var products = await _uow.ProductRepository
                    .AsQueryable()
                    .Include(x => x.Branch)
                    .Include(x => x.Images)
                    .ProjectTo<ProductBriefDto>(_mapper.ConfigurationProvider)
                    .PaginatedListAsync(request.PageNumber, request.PageSize);

                if (String.IsNullOrWhiteSpace(userId)) 
                    return Result<PaginatedList<ProductBriefDto>>.Success(products);

                foreach (var product in products.Items)
                {
                    product.IsLikedByTheUser = await _uow
                        .UserLikeRepository
                        .AsQueryable()
                        .AnyAsync(x => x.ProductId == product.Id && x.UserId == userId);
                }

                return Result<PaginatedList<ProductBriefDto>>.Success(products);
            }
        }
    }
}