using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;
using MediatR;
using Microsoft.Extensions.Logging;

namespace ECommerce.Application.Common.Behaviours
{
    public class LoggingBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : MediatR.IRequest<TResponse>
    {
        private readonly ILogger<LoggingBehaviour<TRequest, TResponse>> _logger;
        private readonly ICurrentUserService _currentUserService;
        private readonly IIdentityService _identityService;

        public LoggingBehaviour(
            ILogger<LoggingBehaviour<TRequest, TResponse>> logger, 
            ICurrentUserService currentUserService, 
            IIdentityService identityService)
        {
            _logger = logger;
            _currentUserService = currentUserService;
            _identityService = identityService;
        }

        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            _logger.LogInformation($"Handling {typeof(TRequest).Name}");
            
            Type myType = request.GetType();
            IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());
            foreach (PropertyInfo prop in props)
            {
                object propValue = prop.GetValue(request, null);
                _logger.LogInformation("{Property} : {@Value}", prop.Name, propValue);
            }

            var response = await next();

            var userId = _currentUserService.UserId ?? string.Empty;
            string userName = string.Empty;

            if (!string.IsNullOrEmpty(userId))
            {
                userName = await _identityService.GetUserNameAsync(userId);
            }
            
            _logger.LogInformation($"Handled Request: {typeof(TResponse).Name} {userId} {userName} {request}");
            return response;
        }
    }
}