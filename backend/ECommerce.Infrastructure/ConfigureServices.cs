using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Common.Interfaces.Repositories;
using ECommerce.Domain.Entities.Identity;
using ECommerce.Infrastructure.Caching;
using ECommerce.Infrastructure.Identity;
using ECommerce.Infrastructure.Images;
using ECommerce.Infrastructure.Persistence;
using ECommerce.Infrastructure.Persistence.Repositories;
using ECommerce.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(opt => {
                opt.UseSqlite(connectionString);
            });

            services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());

            services.AddScoped<ApplicationDbContextInitialiser>();

            services
                .AddIdentityCore<AppUser>(opt => {
                    opt.Password.RequireUppercase = true;
                    opt.Password.RequiredLength = 12;
                    opt.Password.RequireUppercase = true;
                    opt.Password.RequireDigit = true;
                    opt.Password.RequireNonAlphanumeric = true;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            
            services.AddTransient<IDateTime, DateTimeService>();
            services.AddTransient<IIdentityService, IdentityService>();

            services.AddSingleton<IConnectionMultiplexer>(opt => {
                var connConfig = ConfigurationOptions.Parse(config.GetConnectionString("Redis"), true);
                return ConnectionMultiplexer.Connect(connConfig);
            });

            services.AddTransient<IResponseCacheService, ResponseCacheService>();
            
            services.AddTransient<ICartRepository, CartRepository>();

            services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
            services.AddTransient<IImageService, ImageService>();

            return services;
        }
    }
}