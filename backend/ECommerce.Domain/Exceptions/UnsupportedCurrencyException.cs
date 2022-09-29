using System;

namespace ECommerce.Domain.Exceptions
{
    public class UnsupportedCurrencyException : Exception
    {
        public UnsupportedCurrencyException(string currency)
            : base($"The currency \"{currency}\" is not supported for this system. You must choose between BRL (Brazilian Real), EUR (Euro) and USD (US Dollar).")
        {
            
        }
    }
}