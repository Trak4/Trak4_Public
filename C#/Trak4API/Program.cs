using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Trak4API
{
    class Program
    {
        static void Main(string[] args)
        {
            const string API_URL = "https://gps.trak-4.com/api/v2/";    //api URL 
            const string API_KEY = "d1b95a4c22f546faa851a8961e0d20f9";  //Your API Key
           

            var jsonInString = "{\"commandstring\":\"validate_api_key" +     //JSON in string form
                "\",\"token\":\"" + API_KEY + "\",}";


            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(API_URL);

            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));
            var response = client.PostAsync(API_URL, 
                                      new StringContent(jsonInString, Encoding.UTF8, "application/json")).Result;
            var res = response.Content.ReadAsStringAsync().Result;
            
           
            Console.WriteLine(res.ToString());
        }
    }
}
