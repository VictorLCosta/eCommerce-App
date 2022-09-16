using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<ProductType> ProductTypes { get; }
        DbSet<ProductBranch> ProductBranches { get; }
        DbSet<Product> Products { get; }
        DbSet<Customer> Customers { get; }
        DbSet<SalesOrder> SalesOrders { get; }
        DbSet<DeliveryMethod> DeliveryMethods { get; }
        DbSet<SalesOrderItem> SalesOrderItems { get; }
    }
}