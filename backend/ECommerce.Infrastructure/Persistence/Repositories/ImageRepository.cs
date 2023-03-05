using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities;

namespace ECommerce.Infrastructure.Persistence.Repositories
{
    public class ImageRepository : Repository<Image>, IImageRepository
    {
        public ImageRepository(ApplicationDbContext context) 
            : base(context)
        {
        }
    }
}