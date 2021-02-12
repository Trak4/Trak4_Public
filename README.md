# 1. Retrieve your API Key

- Visit https://gps.trak-4.com/
- Log in
- Click your username in the top right
 - Your API key will appear in the account settings panel.

## Reminders

- The API key is rather lengthy. Make sure to copy the entire key!
- Now is a good time to read about API rate limits.


# 2. API Request - Validate API Key

Returns a message indicating the validity of the API key.<br>

## Note

- This API request is entirely optional.
- It is a simple request that can be helpful in building your initial API request code.<br>


# 3. Sample Request


## HTTPS Post to https://gps.trak-4.com/api/v2/ with the following JSON Payload:<br>
{<br>
    "commandstring": "validate_api_key",<br>
    "token": "Insert_My_API_Key"<br>
}<br>
                            
### JSON Details</strong><br>
commandstring	String	API Request Command<br>
token	String	Your API Key<br>
## Sample response<br>
{<br>
    "CommandString": "validate_api_key",<br>
    "timestamp": "12/06/2017 11:14:41",<br>
    "message": "Valid API key."<br>
}<br>
### JSON Details<br>
commandstring	String	Requested API Command<br>
timestamp	String	DateTime (UTC) of server response. Format: MM/dd/yyyy HH:mm:ss<br>
message	String	API key validation details<br>


#3.Please visit https://gps.trak-4.com/api/v2/docs#Section3 for complete list of API commands <br>


#4.Following are steps to call API commands<br>

##4.1 HTTPS Post to https://gps.trak-4.com/api/v2/ with the following JSON Payload:<br>

<a href="https://ibb.co/Ycw9p3x"><img src="https://i.ibb.co/dPx9GrR/Screenshot-137.png"  alt="Screenshot-137" border="0"></a>

#4.2 Response Body<br>
<a href="https://ibb.co/YZ7Kzy5"><img src="https://i.ibb.co/pyvstRH/Screenshot-138.png" alt="Screenshot-138" border="0"></a>
