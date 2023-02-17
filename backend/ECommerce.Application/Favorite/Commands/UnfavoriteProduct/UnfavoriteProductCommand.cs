using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Favorite.Commands.UnfavoriteProduct
{
    public class UnfavoriteProductCommand
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
                    .UserFavoriteRepository
                    .AsQueryable(x => x.ProductId == request.ProductId && x.UserId == userId)
                    .Select(x => x.Id)
                    .FirstOrDefaultAsync(cancellationToken);

                if (userFavoriteId == Guid.Empty) return Result<Unit>.Failure("User like not found");

                await _unitOfWork.UserFavoriteRepository.DeleteAsync(userFavoriteId);

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}