using APILashes.Models;

namespace APILashes.Interfaces
{
    public interface ILashSetPortfolioService
    {
        ICollection<LashSet> GetLashSets();
        LashSet GetLashSet(string id);

    }
}
