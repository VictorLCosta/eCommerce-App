using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Identity
{
    public class Address : BaseEntity
    {
        public string Street { get; set; }
        public string Number { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
        
        public string AppUserId { get; set; }
        public AppUser User { get; set; }
    }
}