using APILashes.Data;
using APILashes.Interfaces;
using APILashes.Models;
using MongoDB.Driver;

namespace APILashes.Services
{
    public class LashSetServicePortfolio : ILashSetPortfolioService
    {
        private readonly IMongoCollection<LashSet> _lashSets;
        private readonly string _that;

        public LashSetServicePortfolio(ILashSetPortfolioDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _lashSets = database.GetCollection <LashSet>(settings.PortfolioLashSetsCollectionName);
        }

        // public string GetBookings()
        public ICollection<LashSet> GetLashSets()
        {
            return _lashSets.Find(student => true).ToList();
        }

        public LashSet GetLashSet(string id)
        {
            return _lashSets.Find(student => student.Id == id).FirstOrDefault();
        }


    }
}
