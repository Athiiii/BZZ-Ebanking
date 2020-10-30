using BZZ_banking.Services.Entity;
using Dapper;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;

namespace BZZ_banking.Services.Service.Demo
{
    public class DatabaseService
    {
        public string CreateNewSession()
        {
            try
            {
                using (var connection = new SqlConnection(Db.GetConnectionString("master")))
                {
                    var session = RandomString(3);
                    // var dict = new Dictionary<string, object> { { "@dbname", $"BZZ_Banking_{session}" } };
                    var sql = File.ReadAllText(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Service\\Banking\\SQL\\Init.sql")).Replace("[BZZ_Banking_EKN]", $"[BZZ_Banking_{session}]");
                    var initSql = "USE [master] \n CREATE DATABASE[BZZ_Banking_EKN] \n ALTER DATABASE[BZZ_Banking_EKN] SET COMPATIBILITY_LEVEL = 130".Replace("[BZZ_Banking_EKN]", $"[BZZ_Banking_{session}]");

                    connection.Query(initSql);
                    connection.Query(sql);
                    return session;
                }

            }
            catch (Exception ex)
            {
                File.WriteAllText(@"C:/_BZZ/LOG", ex.Message);
                return ex.Message;
            }
        }

        public string SearchSession(string session)
        {
            try
            {

                using (var connection = new SqlConnection(Db.GetConnectionString("master")))
                {
                    session = session.Replace(@"'", @"\'");
                    var db = connection.Query($"SELECT [name] FROM master.dbo.sysdatabases WHERE [name] = 'BZZ_Banking_{session}'");
                    if (db.Any())
                        return session;
                    return string.Empty;
                }
            }
            catch (Exception ex)
            {
                var e = new Exception($"SELECT [name] FROM master.dbo.sysdatabases WHERE [name] = 'BZZ_Banking_{session}'", ex);
                throw e;
            }
        }

        private static string RandomString(int length)
        {
            const string pool = "abcdefghijklmnopqrstuvwxyz0123456789";
            var chars = Enumerable.Range(0, length)
                .Select(x => pool[new Random().Next(0, pool.Length)]);
            return new string(chars.ToArray()).ToUpper();

        }
    }
}
