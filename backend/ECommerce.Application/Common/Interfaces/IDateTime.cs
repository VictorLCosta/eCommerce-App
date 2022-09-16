using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerce.Application.Common.Interfaces
{
    public interface IDateTime
    {
        DateTime Now { get; }
        DateTime Today { get; }

        int Day { get; }
        int Month { get; }
        int Year { get; }
    }
}