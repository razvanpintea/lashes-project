using APILashes.Data;
using APILashes.Interfaces;
using APILashes.Models;
using MongoDB.Driver;

namespace APILashes.Services
{
    public class LashSetService : ILashSetService
    {
        private readonly IMongoCollection<LashSet> _lashSets;
        private readonly string _that;

        public LashSetService(ILashSetDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _lashSets = database.GetCollection <LashSet>(settings.LashSetsCollectionName);
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
