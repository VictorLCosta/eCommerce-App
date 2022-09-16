using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Application.Common.Interfaces;

namespace ECommerce.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;

        public DateTime Today => DateTime.Today;

        public int Day => DateTime.Now.Day;

        public int Month => DateTime.Now.Month;

        public int Year => DateTime.Now.Year;
    }
}