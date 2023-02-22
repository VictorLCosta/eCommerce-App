using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class UserLikeConfig : IEntityTypeConfiguration<UserLike>
    {
        public void Configure(EntityTypeBuilder<UserLike> builder)
        {
            builder
                .HasOne(x => x.User)
                .WithMany(x => x.UserLikes)
                .HasForeignKey(x => x.UserId);

            builder
                .HasOne(x => x.Product)
                .WithMany(x => x.UserLikes)
                .HasForeignKey(x => x.ProductId);
        }
    }
}