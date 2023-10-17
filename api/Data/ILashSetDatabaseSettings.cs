namespace APILashes.Data
{
    public interface ILashSetDatabaseSettings
    {
        string LashSetsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
