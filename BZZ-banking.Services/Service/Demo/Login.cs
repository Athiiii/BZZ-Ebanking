using BZZ_banking.Services.Entity;
using BZZ_banking.Services.Entity.Model;
using Dapper;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace BZZ_banking.Services.Service.Demo
{
    public class Login
    {

        public dynamic CheckCredentials(string username, string password)
        {
            using (var connection = new SqlConnection(Db.GetConnectionString("Foodmarket")))
            {
                return connection.Query<dynamic>($"SELECT Id, Username, IsAdmin FROM dbo.Account WHERE [Username] = '{username}' AND [Password] = '{password}'");
            }
        }

        public object CheckEBankingCredentials(string dbname, string username, string password)
        {
            using (var connection = new SqlConnection(Db.GetConnectionString("BZZ_Banking_" + dbname)))
            {
                return connection.Query<dynamic>($"SELECT Id, Username, Firstname, Lastname, AccountName FROM dbo.Account WHERE [Username] = '{username}' AND [Password] = '{password}'");
            }
        }
    }
}
