using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class UserFavoriteConfig : IEntityTypeConfiguration<UserFavorite>
    {
        public void Configure(EntityTypeBuilder<UserFavorite> builder)
        {
            builder
                .HasOne(x => x.User)
                .WithMany(x => x.UserFavorites)
                .HasForeignKey(x => x.UserId);

            builder
                .HasOne(x => x.Product)
                .WithMany(x => x.UserFavorites)
                .HasForeignKey(x => x.ProductId);
        }
    }
}