using BZZ_banking.Services.Entity;
using BZZ_banking.Services.Entity.Model;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace BZZ_banking.Services.Service.Demo
{
    public class Menu
    {

        public IEnumerable<dynamic> SearchMenus(string category, string search)
        {
            try
            {
                using (var connection = new SqlConnection(Db.GetConnectionString("Foodmarket")))
                {
                    return connection.Query<dynamic>($"SELECT m.[Name], c.[Name] as Category, m.[price] as Price FROM Menu as m INNER JOIN Menu_Category AS mc ON mc.Menu_Id = m.Id INNER JOIN Category AS c ON c.Id = mc.Category_Id WHERE c.[Name] = '{category}' AND m.[Name] LIKE '%{search}%'");
                }

            }
            catch (System.Exception ex)
            {
                var e = new Exception($"SELECT m.[Name], c.[Name] as Category, m.[price] as Price FROM Menu as m INNER JOIN Menu_Category AS mc ON mc.Menu_Id = m.Id INNER JOIN Category AS c ON c.Id = mc.Category_Id WHERE c.[Name] = '{category}' AND m.[Name] LIKE '%{search}%'", ex);
                throw e;
            }
        }
    }
}
