namespace ECommerce.Domain.Enums
{
    public enum SalesOrderStatus : int
    {
        Pending = 0, 
        PaymentReceived = 1, 
        PaymentFailed = 2
    }
}