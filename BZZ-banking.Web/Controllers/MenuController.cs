using BZZ_banking.Services.Service.Demo;
using Microsoft.AspNetCore.Mvc;

namespace BZZ_banking.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetMenu([FromQuery]string category = "", [FromQuery]string search = "")
        {
            category = category == null ? "" : category;
            search = search == null ? "" : search;
            return new OkObjectResult(new Menu().SearchMenus(category, search));
        }
    }
}
