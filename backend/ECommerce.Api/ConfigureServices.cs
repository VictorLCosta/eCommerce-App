using System;
using System.Text;
using ECommerce.Api.Filter;
using ECommerce.Api.Services;
using ECommerce.Application.Common.Interfaces;
using ECommerce.Application.Product.Commands.CreateProduct;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
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

            var key = Encoding.UTF8.GetBytes(config["Jwt:Key"]);

            services.AddAuthentication(opt => {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(opt => {
                opt.RequireHttpsMetadata = false;
                opt.SaveToken = true;
                opt.TokenValidationParameters = new TokenValidationParameters {
                    ValidateLifetime= true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = config["Jwt:Issuer"],
                    ValidAudience = config["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                };
            });

            services.AddTransient<ITokenService, TokenService>();

            return services;
        }
    }
}