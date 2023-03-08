using ECommerce.Application.Common.Mappings;
using ECommerce.Domain.Entities;

namespace ECommerce.Application.Branch.Queries.GetProductBranch
{
    public class ProductBranchDto : IMapFrom<ProductBranch>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public string ContactPerson { get; set; }
    }
}