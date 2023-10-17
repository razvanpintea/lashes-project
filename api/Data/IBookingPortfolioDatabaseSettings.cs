namespace APILashes.Data
{
    public interface IBookingPortfolioDatabaseSettings
    {
        string PortfolioBookingsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
