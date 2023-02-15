using System.Threading.Tasks;
using ECommerce.Application.Common.Models;
using ECommerce.Domain.Entities.Identity;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<AppUser> GetUserAsync(string email);
        Task<AppUser> GetUserByIdAsync(string id);

        Task<string> GetUserNameAsync(string userId);

        Task<bool> CheckPasswordAsync(AppUser user, string password);

        Task<bool> IsInRoleAsync(string userId, string role);

        Task<bool> AuthorizeAsync(string userId, string policyName);

        Task<(Result<bool> Result, string UserId)> CreateUserAsync(string userName, string password);

        Task<Result<bool>> DeleteUserAsync(string userId);
    }
}