using APILashes.Models;

namespace APILashes.Interfaces
{
    public interface IEmailService
    {
        void SendEmail(EmailDto request);
    }
}
