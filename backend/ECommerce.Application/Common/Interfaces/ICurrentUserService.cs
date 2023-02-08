namespace ECommerce.Application.Common.Interfaces
{
    #nullable enable
    public interface ICurrentUserService
    {
        string? UserId { get; }
    }
}