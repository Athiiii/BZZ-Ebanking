using BZZ_banking.Services.Service.Demo;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BZZ_banking.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        [HttpGet("{dbname}")]
        public IActionResult GetTransactions(string dbname, [FromQuery]string username, [FromQuery]string password)
        {
            if (username == null) username = "";
            if (password == null) password = "";
            var response = new Transaction().GetTransactions(dbname, username, password);
            return new OkObjectResult(response != null ? response : new List<string>());
        }
    }
}
