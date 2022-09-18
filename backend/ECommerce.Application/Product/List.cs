using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using ECommerce.Domain.DTOs.Product;
using MediatR;

namespace ECommerce.Application.Product
{
    public class List
    {
        public class Query : IRequest<Result<List<ProductDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<ProductDto>>>
        {
            private readonly IUnitOfWork _uow;
            private readonly IMapper _mapper;

            public Handler(IUnitOfWork uow, IMapper mapper)
            {
                _uow = uow;
                _mapper = mapper;
            }

            public async Task<Result<List<ProductDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var list = await _uow.ProductRepository.GetAll();

                var products = _mapper.Map<List<ProductDto>>(list.ToList());

                return Result<List<ProductDto>>.Success(products);
            }
        }
    }
}