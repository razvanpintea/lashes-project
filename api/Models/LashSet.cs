using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace APILashes.Models

{
    public class LashSet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
       
        [BsonElement("name")]
        public string Name { get; set; }
        
        [BsonElement("category")]
        public string Category { get; set; }

        [BsonElement("price")]
        public int Price { get; set; }

        [BsonElement("duration")]
        public int Duration { get; set; }
    }
}
