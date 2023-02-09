using ECommerce.Domain.Entities.Identity;

namespace ECommerce.Application.Common.Interfaces
{
    public interface ITokenService
    {
        string GenerateJwtToken(AppUser user);
    }
}