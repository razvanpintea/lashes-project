using APILashes.Interfaces;
using APILashes.Models;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class BookingsPortfolioController : ControllerBase
{
    private readonly IBookingPortfolioService _bookingsService;

    public BookingsPortfolioController(IBookingPortfolioService bookingsService)
    {
        _bookingsService = bookingsService;
    }
    // GET: api/<StudentsController>
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(ICollection<Booking>))]
    public ActionResult GetBookings()
    {
        return Ok(_bookingsService.GetBookings());
    }

    [HttpPost]
    [ProducesResponseType(201)] // You can specify the desired response status code for successful creation
    [ProducesResponseType(400)] // You can specify the desired response status code for bad request
    public ActionResult CreateBooking([FromBody] Booking booking)
    {
        if (booking == null)
        {
            return BadRequest(); // Return a 400 Bad Request response if the request body is empty or invalid
        }

        // Assuming you have a service method to create a booking
        _bookingsService.CreateBooking(booking);

        // Return a 201 Created response indicating that the resource has been successfully created
        return CreatedAtAction(nameof(GetBookings), new { id = booking.Id }, null);
    }

}