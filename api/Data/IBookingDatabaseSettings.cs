namespace APILashes.Data
{
    public interface IBookingDatabaseSettings
    {
        string BookingsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
