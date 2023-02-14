using System;
using System.ComponentModel.DataAnnotations;

namespace ECommerce.Domain.Common
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        protected BaseEntity()
        {
            Id = Guid.NewGuid();
            CreatedAt = DateTime.UtcNow;
        }

        private DateTime? _createdAt;

        public DateTime? CreatedAt 
        { 
            get => _createdAt;
            set => _createdAt = value ?? DateTime.UtcNow;
        }

        public DateTime? UpdatedAt { get; set; }
    }
}