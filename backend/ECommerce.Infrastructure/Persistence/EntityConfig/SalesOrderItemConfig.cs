using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class SalesOrderItemConfig : IEntityTypeConfiguration<SalesOrderItem>
    {
        public void Configure(EntityTypeBuilder<SalesOrderItem> builder)
        {
            builder
                .OwnsOne(x => x.Price)
                .Property(x => x.Amount)
                .HasColumnName("Price_Amount")
                .IsRequired(true);

            builder
                .OwnsOne(x => x.Price)
                .Property(x => x.Currency)
                .HasColumnName("Price_Currency")
                .IsRequired(true);
        }
    }
}