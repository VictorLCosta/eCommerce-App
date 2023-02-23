using System;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Like.Queries.GetIsLiked
{
    public class GetIsLikedQuery
    {
        public class Query : IRequest<Result<bool>>
        {
            public Guid ProductId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<bool>>
        {
            private readonly ICurrentUserService _currentUserService;
            private readonly IUnitOfWork _uow;

            public Handler(ICurrentUserService currentUserService, IUnitOfWork uow)
            {
                _currentUserService = currentUserService;
                _uow = uow;
            }

            public async Task<Result<bool>> Handle(Query request, CancellationToken cancellationToken)
            {
                var currentUserId = _currentUserService.UserId;

                var isLiked = await _uow
                    .UserLikeRepository
                    .AsQueryable(x => x.ProductId == request.ProductId && x.UserId == currentUserId)
                    .AnyAsync();

                return Result<bool>.Success(isLiked);
            }
        }
    }
}