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

namespace ECommerce.Application.Product.Queries.GetProductImageList
{
    public class GetProductImageListQuery
    {
        public class Query : IRequest<Result<List<ImageDto>>>
        {
            public Guid ProductId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<ImageDto>>>
        {
            private readonly IUnitOfWork _unitOfWork;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork unitOfWork, IMapper mapper)
            {
                _unitOfWork = unitOfWork;
                _mapper = mapper;
            }

            public async Task<Result<List<ImageDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var images = await _unitOfWork
                    .ImageRepository
                    .AsQueryable(x => x.ProductId == request.ProductId)
                    .ProjectTo<ImageDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return Result<List<ImageDto>>.Success(images);
            }
        }
    }
}