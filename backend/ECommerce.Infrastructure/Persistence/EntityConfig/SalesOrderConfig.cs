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

            builder
                .OwnsOne(x => x.Subtotal)
                .Property(x => x.Amount)
                .HasColumnName("Subtotal_Amount")
                .IsRequired(true);

            builder
                .OwnsOne(x => x.Subtotal)
                .Property(x => x.Currency)
                .HasColumnName("Subtotal_Currency")
                .IsRequired(true);
        }
    }
}