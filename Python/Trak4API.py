import requests
import json

API_URL = "https://gps.trak-4.com/api/v2/";    
API_KEY = "d1b95a4c22f546faa851a8961e0d20f9";  

myobj = {'commandstring': 'validate_api_key','token':API_KEY}




x = requests.post(API_URL, json=myobj)
print(x.text)