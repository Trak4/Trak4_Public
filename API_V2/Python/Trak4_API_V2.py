import requests
import json

API_URL = "https://gps.trak-4.com/api/v2/";    
API_KEY = "Your_API_KEY Here";  

Request_Payload = {'commandstring': 'get_devices','token':API_KEY}

x = requests.post(API_URL, json=Request_Payload)

json_data = x.json()

for device in json_data.get("data"):
    print ("Device# " + str(device.get("deviceId")) + " last reported at " + str(device.get("lastReportTime")))
