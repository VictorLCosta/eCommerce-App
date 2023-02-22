using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class UserLikeRepository : Repository<UserLike>, IUserLikeRepository
    {
        public UserLikeRepository(ApplicationDbContext context) 
            : base(context)
        {
        }
    }
}