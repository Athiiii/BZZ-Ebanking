using BZZ_banking.Services.Service.Demo;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BZZ_banking.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        [HttpGet("login")]
        public IActionResult GetUser([FromQuery]string username, [FromQuery]string password)
        {
            if (username == null) username = "";
            if (password == null) password = "";
            var response = new Login().CheckCredentials(username, password);
            return new OkObjectResult(response != null ? response : new List<string>());
        }


        [HttpGet("{dbname}")]
        public IActionResult LoginEBanking(string dbname, [FromQuery]string username, [FromQuery]string password)
        {
            if (username == null) username = "";
            if (password == null) password = "";
            var response = new Login().CheckEBankingCredentials(dbname, username, password);
            return new OkObjectResult(response != null ? response : new List<string>());
        }
    }
}
