using System.Reflection;
using ECommerce.Application.Common.Behaviours;
using ECommerce.Application.Product.Queries.GetProductList;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Configuration;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(typeof(GetProductListQuery.Handler).Assembly);
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            services.AddScoped(typeof(IPipelineBehavior<,>), typeof(LoggingBehaviour<,>));
            services.AddScoped(typeof(IPipelineBehavior<,>), typeof(PerformanceBehaviour<,>));

            return services;
        }
    }
}