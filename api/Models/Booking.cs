using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace APILashes.Models
{
    [BsonIgnoreExtraElements]

    public class Booking
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("date")]
        public String Date { get; set; }

        [BsonElement("time")]
        public String Time { get; set; }

        [BsonElement("silentTreatment")]
        public string SilentTreatment { get; set; }

        [BsonElement("phone")]
        public string Phone{ get; set; }

        [BsonElement("comments")]
        public string Comments { get; set; }

        [BsonElement("lashSetId")]
        public string LashSetId { get; set; }

    }
}
