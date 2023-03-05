using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Domain.Entities;
using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ECommerce.Infrastructure.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<ProductType> ProductTypes => Set<ProductType>();
        public DbSet<ProductBranch> ProductBranches => Set<ProductBranch>();
        public DbSet<Product> Products => Set<Product>();
        public DbSet<Customer> Customers => Set<Customer>();
        public DbSet<SalesOrder> SalesOrders => Set<SalesOrder>();
        public DbSet<DeliveryMethod> DeliveryMethods => Set<DeliveryMethod>();
        public DbSet<SalesOrderItem> SalesOrderItems => Set<SalesOrderItem>();
        public DbSet<UserLike> UserLikes => Set<UserLike>();
        public DbSet<Image> Images => Set<Image>();

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