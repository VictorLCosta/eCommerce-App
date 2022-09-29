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

            builder.OwnsOne(x => x.DefaultPrice, b => 
            {
                b.Property(e => e.Amount).HasColumnName("DefaultPrice");
                b.OwnsOne(e => e.Currency, bc => 
                {
                    bc.Property(e => e.Name).HasColumnName("CurrencyName").HasMaxLength(25);
                    bc.Property(e => e.Symbol).HasColumnName("CurrencySymbol").HasMaxLength(25);
                });
            });

        }
    }
}