using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;
using ECommerce.Domain.Entities.Common;
using ECommerce.Domain.Entities.Identity;
using ECommerce.Domain.Entities.ValueObjects;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ECommerce.Infrastructure.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<ProductBranch> ProductBranches { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<SalesOrder> SalesOrders { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
        public DbSet<SalesOrderItem> SalesOrderItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            foreach (var entity in builder.Model.GetEntityTypes().Where(e => typeof(BaseEntity).IsAssignableFrom(e.ClrType)))
            {
                var stringProps = entity.ClrType.GetProperties().Where(p => p.PropertyType == typeof(string));
                foreach (var prop in stringProps)
                {
                    switch (prop.Name)
                    {
                        case "Description":
                            builder.Entity(entity.Name).Property(prop.Name).HasColumnType("TEXT");
                            break;
                        default:
                            builder.Entity(entity.Name).Property(prop.Name).HasColumnType("varchar(150)");
                            break;
                    }
                }
            }

            if(Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach(var item in builder.Model.GetEntityTypes())
                {
                    var props = item.ClrType.GetProperties().Where(e => e.PropertyType == typeof(DateTimeOffset));
                    foreach (var prop in props)
                    {
                        builder.Entity(item.Name).Property(prop.Name).HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
            }
        }

    }
}