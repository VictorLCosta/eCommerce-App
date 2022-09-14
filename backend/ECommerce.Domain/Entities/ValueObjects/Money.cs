using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Entities.Common;

namespace ECommerce.Domain.Entities.ValueObjects
{
    public class Money : ValueObject
    {
        public string Currency { get; private set; }
        public decimal Amount { get; private set; }

        static Money()
        {
            
        }

        private Money()
        {

        }

        private Money(string currency, decimal amount)
        {
            Currency = currency;
            Amount = amount;
        }

        public static Money Real(decimal amount) => new Money("R$", amount);
        public static Money Euro(decimal amount) => new Money("€", amount);
        public static Money Dollar(decimal amount) => new Money("US$", amount);

        public override string ToString()
        {
            return $"{Currency.ToUpper()} {Amount}";
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Math.Round(Amount, 2);
            yield return Currency.ToUpper();
        }
    }
}