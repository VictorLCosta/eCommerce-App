using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class UserFavoriteRepository : Repository<UserFavorite>, IUserFavoriteRepository
    {
        public UserFavoriteRepository(ApplicationDbContext context) 
            : base(context)
        {
        }
    }
}