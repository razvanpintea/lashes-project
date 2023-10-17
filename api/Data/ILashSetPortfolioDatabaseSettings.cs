namespace APILashes.Data
{
    public interface ILashSetPortfolioDatabaseSettings
    {
        string PortfolioLashSetsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
