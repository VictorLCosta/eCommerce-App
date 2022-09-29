using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Product.Commands.CreateProduct;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace ECommerce.Api
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddWebDependencies(this IServiceCollection services, IConfiguration config)
        {
            var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            if (env == "Development") 
            {
                services.AddHealthChecks()
                    .AddSqlite(config.GetConnectionString("DefaultConnection"));
            }
            else
            {
                services.AddHealthChecks()
                    .AddMySql(config.GetConnectionString("DefaultConnection"));
            }

            services.Configure<ApiBehaviorOptions>(options =>
                options.SuppressModelStateInvalidFilter = true);

            services.AddControllers().AddFluentValidation(config => {
                config.RegisterValidatorsFromAssemblyContaining<CreateProductCommand>();
            });

            services.AddSwaggerGen(opt => {
                opt.SwaggerDoc("v1", new OpenApiInfo { Title = "Api", Version = "v1" });
            });

            return services;
        }
    }
}