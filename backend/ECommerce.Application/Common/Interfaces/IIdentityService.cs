using System.Threading.Tasks;
using ECommerce.Application.Common.Models;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<string> GetUserNameAsync(string userId);

        Task<bool> IsInRoleAsync(string userId, string role);

        Task<bool> AuthorizeAsync(string userId, string policyName);

        Task<(Result<bool> Result, string UserId)> CreateUserAsync(string userName, string password);

        Task<Result<bool>> DeleteUserAsync(string userId);
    }
}