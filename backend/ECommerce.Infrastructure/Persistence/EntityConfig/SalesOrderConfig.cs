using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ECommerce.Infrastructure.Persistence.EntityConfig
{
    public class SalesOrderConfig : IEntityTypeConfiguration<SalesOrder>
    {
        public void Configure(EntityTypeBuilder<SalesOrder> builder)
        {
            builder
                .HasOne(x => x.Customer)
                .WithMany(x => x.Sales)
                .HasForeignKey(x => x.CustomerId);

            builder
                .HasMany(x => x.OrderItems)
                .WithOne(x => x.SalesOrder)
                .HasForeignKey(x => x.SalesOrderId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.OwnsOne(x => x.Subtotal, b => 
            {
                b.Property(e => e.Amount).HasColumnName("Subtotal");
                b.OwnsOne(e => e.Currency, bc => 
                {
                    bc.Property(e => e.Name).HasColumnName("CurrencyName").HasMaxLength(25);
                    bc.Property(e => e.Symbol).HasColumnName("CurrencySymbol").HasMaxLength(25);
                });
            });
        }
    }
}