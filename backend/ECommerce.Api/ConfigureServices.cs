using System;
using ECommerce.Api.Filter;
using ECommerce.Api.Services;
using ECommerce.Application.Common.Interfaces;
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

            services.AddControllers(opt => 
                opt.Filters.Add<ValidationErrorFilter>()
            ).AddFluentValidation(config => {
                config.RegisterValidatorsFromAssemblyContaining<CreateProductCommand>();
            });

            services.AddSwaggerGen(opt => {
                opt.SwaggerDoc("v1", new OpenApiInfo { Title = "Api", Version = "v1" });
            });

            services.AddCors(opt => 
                opt.AddDefaultPolicy(policy => {
                    policy
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials()
                        .WithOrigins("http://localhost:5173");
                })
            );

            services.AddHttpContextAccessor();
            services.AddSingleton<ICurrentUserService, CurrentUserService>();

            return services;
        }
    }
}