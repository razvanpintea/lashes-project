using APILashes.Models;

namespace APILashes.Interfaces
{
    public interface ILashSetService
    {
        ICollection<LashSet> GetLashSets();
        LashSet GetLashSet(string id);

    }
}
