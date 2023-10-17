using APILashes.Interfaces;
using APILashes.Models;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class LashSetsController : ControllerBase
{
    private readonly ILashSetService _lashSetsService;

    public LashSetsController(ILashSetService lashSetsService)
    {
        _lashSetsService = lashSetsService;
    }
    // GET: api/<StudentsController>
    [HttpGet]
    [ProducesResponseType(200, Type = typeof(ICollection<LashSet>))]
    public ActionResult GetLashSets()
    {
        return Ok(_lashSetsService.GetLashSets());
    }


}