using BZZ_banking.Services.Service.Demo;
using Microsoft.AspNetCore.Mvc;

namespace BZZ_banking.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DbController : ControllerBase
    {
        [HttpGet]
        public IActionResult CreateSession([FromQuery]string session = "")
        {
            if(session != null && session != "")
                return new OkObjectResult(new DatabaseService().SearchSession(session));

            return new OkObjectResult(new DatabaseService().CreateNewSession());
        }
    }
}
