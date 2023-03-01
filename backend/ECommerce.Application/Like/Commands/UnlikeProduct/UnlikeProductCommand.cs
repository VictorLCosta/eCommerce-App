using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Like.Commands.UnlikeProduct
{
    public class UnlikeProductCommand
    {
        public class Command : IRequest<Result<Unit>> 
        {
            public Guid ProductId { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly IUnitOfWork _unitOfWork;
            private readonly ICurrentUserService _currentUserService;

            public Handler(IUnitOfWork unitOfWork, ICurrentUserService currentUserService)
            {
                _unitOfWork = unitOfWork;
                _currentUserService = currentUserService;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var userId = _currentUserService.UserId;

                var userFavoriteId = await _unitOfWork
                    .UserLikeRepository
                    .AsQueryable(x => x.ProductId == request.ProductId && x.UserId == userId)
                    .Select(x => x.Id)
                    .FirstOrDefaultAsync(cancellationToken);

                if (userFavoriteId == Guid.Empty) return Result<Unit>.Failure("User like not found");

                await _unitOfWork.UserLikeRepository.DeleteAsync(userFavoriteId);

                var result = await _unitOfWork.Complete();

                return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Error in unlike product");
            }
        }
    }
}