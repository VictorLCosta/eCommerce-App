using System.Threading.Tasks;
using ECommerce.Application.Common.Models;
using Microsoft.AspNetCore.Http;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IImageService
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<string> DeletePhoto(string publicId);
    }
}