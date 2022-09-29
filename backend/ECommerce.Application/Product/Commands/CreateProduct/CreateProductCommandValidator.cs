
using FluentValidation;

namespace ECommerce.Application.Product.Commands.CreateProduct
{
    public class CreateProductCommandValidator : AbstractValidator<CreateProductDto>
    {
        public CreateProductCommandValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty();

            RuleFor(x => x.DefaultPrice)
                .NotEmpty();
        }
    }
}