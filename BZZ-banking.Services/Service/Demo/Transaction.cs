using BZZ_banking.Services.Entity;
using BZZ_banking.Services.Entity.Model;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace BZZ_banking.Services.Service.Demo
{
    public class Transaction
    {

        public IEnumerable<dynamic> GetTransactions(string dbname, string username, string password)
        {
            try
            {
                using (var connection = new SqlConnection(Db.GetConnectionString("BZZ_Banking_" + dbname)))
                {
                    var transfers = connection.Query<dynamic>($"SELECT [Price] FROM dbo.[Transfer] INNER JOIN Account a ON a.Id = AccountId WHERE a.Username = '{username}' AND a.[Password] = '{password}'");
                    return transfers;
                }
            }
            catch (System.Exception ex)
            {
                var e = new Exception($"SELECT [Price] FROM dbo.[Transfer] INNER JOIN Account a ON a.Id = AccountId WHERE a.Username = '{username}' AND a.[Password] = '{password}'", ex);
                throw e;
            }
        }
    }
}
