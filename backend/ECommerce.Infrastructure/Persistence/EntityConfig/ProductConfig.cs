using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasIndex(x => x.Name);

            builder
                .HasOne(x => x.Branch)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.BranchId)
                .OnDelete(DeleteBehavior.Cascade);
            
            builder
                .HasOne(x => x.Type)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.TypeId)
                .OnDelete(DeleteBehavior.Cascade);

            builder
                .OwnsOne(x => x.DefaultPrice)
                .Property(x => x.Amount)
                .HasColumnName("DefaultPrice_Amount")
                .IsRequired(true);

            builder
                .OwnsOne(x => x.DefaultPrice)
                .Property(x => x.Currency)
                .HasColumnName("DefaultPrice_Currency")
                .IsRequired(true);
        }
    }
}