using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerce.Domain.Common;
using ECommerce.Domain.Exceptions;

namespace ECommerce.Domain.ValueObjects
{
    public class Currency : ValueObject
    {
        public string Name { get; set; }
        public string Symbol { get; set; }

        public Currency() {}

        private Currency(string name, string symbol)
        {
            Name = name;
            Symbol = symbol;
        }

        public override string ToString()
        {
            return this.Symbol;
        }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Symbol;
        }

        #region Factory

        private static readonly IDictionary<string, Currency> _currencies;

        static Currency()
        {
            _currencies = new Dictionary<string, Currency>()
            {
                { Real.Name, Real },
                { Euro.Name, Euro },
                { USDollar.Name, USDollar }
            };
        }

        public static Currency FromCode(string code)
        {
            if(string.IsNullOrWhiteSpace(code))
                throw new ArgumentNullException(nameof(code));
            if(!_currencies.ContainsKey(code))
                throw new UnsupportedCurrencyException(code);
            return _currencies[code];
        }

        public static Currency Real => new Currency("BRL", "R$");
        public static Currency Euro => new Currency("EUR", "€");
        public static Currency USDollar => new Currency("USD", "US$");

        #endregion Factory
    }
}