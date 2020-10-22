using BZZ_banking.Services.Entity.Initialize;
using Microsoft.AspNetCore.Mvc;

namespace BZZ_banking.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        
        public IActionResult Test()
        {
            return new OkObjectResult(new InizitializeDemoDb().Test("master"));
        }

        public string Index()
        {
            return "This is my default action...";
        }
    }
}