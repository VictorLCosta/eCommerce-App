using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ECommerce.Api.Filter
{
    public class ValidationErrorFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            return;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if(!context.ModelState.IsValid)
            {
                var details = new ValidationProblemDetails(context.ModelState)
                {
                    Type = "https://datatracker.ietf.org/doc/html/rfc4918#section-11.2",
                };

                // Optional -> var details = context.ModelState.Values.SelectMany(x => x.Errors.Select(x => x.ErrorMessage));

                context.Result = new UnprocessableEntityObjectResult(details);
            }
        }
    }
}