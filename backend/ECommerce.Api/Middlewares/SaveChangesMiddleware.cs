using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace ECommerce.Api.Middlewares;

public class SaveChangesMiddleware
{
    private readonly RequestDelegate _next;
    private readonly IHostEnvironment _env;

    public SaveChangesMiddleware(RequestDelegate next, IHostEnvironment env)
    {
        _next = next;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        await _next.Invoke(context);

        var unitOfWork = context.RequestServices.GetRequiredService<IUnitOfWork>();

        await unitOfWork.Complete();
        await unitOfWork.DisposeAsync();
    }
}
