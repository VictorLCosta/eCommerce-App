using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities
{
    public class Image : BaseEntity
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Type { get; set; }

        public bool IsMain { get; set; }
    }
}