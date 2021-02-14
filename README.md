# 1. Retrieve your API Key

- Visit https://gps.trak-4.com/
- Log in
- Click your username in the top right
- Your API key will appear in the account settings panel.

## Reminders

- The API key is rather lengthy. Make sure to copy the entire key!
- Now is a good time to read about API rate limits.

<br />
# 2. API Request - Validate API Key

- Returns a message indicating the validity of the API key.

## Note

- This API request is entirely optional.
- It is a simple request that can be helpful in building your initial API request code.<br>

<br /><br />

# 3.Sample Request


- HTTPS Post to **https://gps.trak-4.com/api/v2/ with the following JSON Payload:**
```
{
 "commandstring": "validate_api_key",
 "token": "Insert_My_API_Key"
}
```
                        
			
**JSON Payload Details**
- **commandstring:  String API Request Command**
- **token	String:	 Your API Key**


**Sample Response**

```
 {
  "CommandString": "validate_api_key",
 "timestamp": "12/06/2017 11:14:41",
  "message": "Valid API key."
 }
 ```
 

# 4.Full Documentation

-  https://gps.trak-4.com/api/v2/docs#Section3   
	- **Following are the command names:**
		- Get Devices
		- Get Device
		- Get Reports 
		- Single Device
		- Retrieve Reports
		- All Devices
		- Get Reporting Frequency Options for Device
		- Get Organizations
		- Get Device Groups
		- Get Device Group Devices
		- Set reporting frequency for device


