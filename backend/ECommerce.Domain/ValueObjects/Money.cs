using System;
using System.Collections.Generic;
using ECommerce.Domain.Common;

namespace ECommerce.Domain.ValueObjects
{
    public class Money : ValueObject
    {
        public decimal Amount { get; }
        public Currency Currency { get; }

        private Money() {}

        public Money(Currency currency, decimal amount)
        {
            Currency = currency ?? throw new ArgumentNullException(nameof(currency));
            Amount = amount;
        }

        public override string ToString()
        {
            return $"{Currency} {Amount}";
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Amount;
            yield return Currency;
        }
    }
}