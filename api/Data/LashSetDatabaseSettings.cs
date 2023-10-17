namespace APILashes.Data
{
    
    public class LashSetDatabaseSettings : ILashSetDatabaseSettings
    {
        public string LashSetsCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        
    }
}
