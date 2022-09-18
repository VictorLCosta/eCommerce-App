using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using ECommerce.Application.Product;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ECommerce.CrossCutting.DependencyInjection
{
    public static class ConfigureApplication
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services, IConfiguration config)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(typeof(List.Handler).Assembly);

            return services;
        }
    }
}