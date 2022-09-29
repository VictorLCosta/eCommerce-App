using System;
using System.ComponentModel.DataAnnotations;

namespace ECommerce.Domain.Common
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            CreatedAt = DateTime.UtcNow;
        }

        private DateTime? _createdAt;

        public DateTime? CreatedAt 
        { 
            get { return _createdAt; } 
            set { _createdAt = value == null ? DateTime.UtcNow : value; } 
        }

        public DateTime? UpdatedAt { get; set; }
    }
}