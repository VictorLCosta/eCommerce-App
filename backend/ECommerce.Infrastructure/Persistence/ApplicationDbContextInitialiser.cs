using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using ECommerce.Domain.Entities;
using ECommerce.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ECommerce.Infrastructure.Persistence;

public class ApplicationDbContextInitialiser
{
    private readonly ILogger _logger;
    private readonly ApplicationDbContext _context;
    private readonly UserManager<AppUser> _userManager;

    public ApplicationDbContextInitialiser(ILogger logger, ApplicationDbContext context, UserManager<AppUser> userManager)
    {
        _logger = logger;
        _context = context;
        _userManager = userManager;
    }

    public async Task InitialiseAsync()
    {
        try
        {
            await _context.Database.MigrateAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while initialising the database.");
            throw;
        }
    }

    public async Task SeedAsync()
    {
        try
        {
            if (!await _context.Users.AnyAsync())
            {
                var usersData = File.ReadAllText("../Ecommerce.Infrastructure/Persistence/SeedData/users.json");

                var users = JsonSerializer.Deserialize<List<AppUser>>(usersData);

                foreach (var user in users)
                {
                    await _userManager.CreateAsync(user, "T0n1car7Malajohnson@");
                }

                await _context.SaveChangesAsync();
            }
            if (!await _context.ProductBranches.AnyAsync())
            {
                var branchesData = File.ReadAllText("../Ecommerce.Infrastructure/Persistence/SeedData/branches.json");

                var brands = JsonSerializer.Deserialize<List<ProductBranch>>(branchesData);

                foreach (var item in brands)
                {
                    await _context.ProductBranches.AddAsync(item);
                }

                await _context.SaveChangesAsync();
            }
            if (!await _context.ProductTypes.AnyAsync())
            {
                var typesData = File.ReadAllText("../Ecommerce.Infrastructure/Persistence/SeedData/types.json");

                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                foreach (var item in types)
                {
                    await _context.ProductTypes.AddAsync(item);
                }

                await _context.SaveChangesAsync();

            }
            if (!await _context.Products.AnyAsync())
            {
                var productsData = File.ReadAllText("../Ecommerce.Infrastructure/Persistence/SeedData/products.json");

                var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                foreach (var item in products)
                {
                    await _context.Products.AddAsync(item);
                }

                await _context.SaveChangesAsync();
            }
            if (!await _context.Images.AnyAsync())
            {
                var imagesData = File.ReadAllText("../Ecommerce.Infrastructure/Persistence/SeedData/images.json");

                var images = JsonSerializer.Deserialize<List<Image>>(imagesData);

                foreach (var item in images)
                {
                    await _context.Images.AddAsync(item);
                }

                await _context.SaveChangesAsync();
            }
        }
        catch (System.Exception e)
        {
            _logger.LogError(e.Message);
            throw;
        }
    }
}
