using APILashes.Interfaces;
using APILashes.Models;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
public class LashSetsPortfolioController : ControllerBase
{
    private readonly ILashSetPortfolioService _lashSetsService;

    public LashSetsPortfolioController(ILashSetPortfolioService lashSetsService)
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