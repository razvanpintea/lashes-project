namespace APILashes.Data
{
    
    public class LashSetPortfolioDatabaseSettings : ILashSetPortfolioDatabaseSettings
    {
        public string PortfolioLashSetsCollectionName { get; set; } = String.Empty;
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        
    }
}
