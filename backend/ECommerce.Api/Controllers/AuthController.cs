using System.Threading.Tasks;
using ECommerce.Api.Models;
using ECommerce.Application.Common.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ICurrentUserService _currentUserService;
        private readonly IIdentityService _identityService;
        private readonly ITokenService _tokenService;

        public AuthController(
            ICurrentUserService currentUserService, 
            IIdentityService identityService, 
            ITokenService tokenService)
        {
            _currentUserService = currentUserService;
            _identityService = identityService;
            _tokenService = tokenService;
        }

        [HttpGet("me")]
        public async Task<IActionResult> Me()
        {
            var currentUserId = _currentUserService.UserId;

            var user = await _identityService.GetUserByIdAsync(currentUserId);

            if (user != null) return Ok(new UserDto { 
                DisplayName = user.DisplayName,
                PictureUrl = user.ProfilePictureUrl,
                UserName = user.UserName
            });

            return NotFound("User not found");
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            var user = await _identityService.GetUserAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _identityService.CheckPasswordAsync(user, loginDto.Password);

            if (result)
            {
                var token = _tokenService.GenerateJwtToken(user);

                return Ok(new UserDto
                {
                    DisplayName = user.DisplayName,
                    PictureUrl = user.ProfilePictureUrl,
                    Token = token,
                    UserName = user.UserName
                });
            }

            return Unauthorized();

        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            var ( result, userId ) = await _identityService.CreateUserAsync(registerDto.Email, registerDto.Password);

            if (result.IsSuccess) return Ok(userId);

            return BadRequest(result.Error);
        }
    }
}