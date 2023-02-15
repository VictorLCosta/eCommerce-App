namespace ECommerce.Api.Models
{
    public class AuthUser
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string PictureUrl { get; set; }
    }
}