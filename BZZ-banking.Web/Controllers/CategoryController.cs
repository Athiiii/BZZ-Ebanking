using BZZ_banking.Services.Service.Demo;
using Microsoft.AspNetCore.Mvc;

namespace BZZ_banking.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCategories()
        {
            return new OkObjectResult(new Category().GetCategories());
        }
    }
}
