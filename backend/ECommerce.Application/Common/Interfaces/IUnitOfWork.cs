using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task<bool> Complete();
    }
}