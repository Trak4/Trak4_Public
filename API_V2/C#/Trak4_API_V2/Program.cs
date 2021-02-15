using Newtonsoft.Json;
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
            const string API_KEY = "YOUR_API_KEY";  //Your API Key

            var jsonInString = "{\"commandstring\":\"get_devices" +     //JSON in string form
                "\",\"token\":\"" + API_KEY + "\",}";

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(API_URL);

            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            
            var response = client.PostAsync(API_URL,
                                              new StringContent(jsonInString, Encoding.UTF8, "application/json")).Result;
            
            var res = response.Content.ReadAsStringAsync().Result;
            
            dynamic json = JsonConvert.DeserializeObject(res);

            foreach (var x in json.data)
                Console.WriteLine("Device# " + x.deviceId.ToString() + " last reported " + x.lastReportTime);

        }
    }
}
