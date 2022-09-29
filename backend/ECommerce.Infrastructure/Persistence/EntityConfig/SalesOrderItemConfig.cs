using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class SalesOrderItemConfig : IEntityTypeConfiguration<SalesOrderItem>
    {
        public void Configure(EntityTypeBuilder<SalesOrderItem> builder)
        {
            builder.OwnsOne(x => x.Price, b => 
            {
                b.Property(e => e.Amount).HasColumnName("Price");
                b.OwnsOne(e => e.Currency, bc => 
                {
                    bc.Property(e => e.Name).HasColumnName("CurrencyName").HasMaxLength(25);
                    bc.Property(e => e.Symbol).HasColumnName("CurrencySymbol").HasMaxLength(25);
                });
            });
        }
    }
}