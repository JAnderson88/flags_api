Techlaunch Flag API

This API is used to provide flags icons for each country. Consume this API by providing the country code from the Bitcoin API to this application. You will receive a flag icon and place them within the price container divs for each country. The endpoints to this API are as follows

api.techlaunch.io:89/flags ->
  Not all country flags have been added to the API. If you want to add a flag becuase you do not to see one provided (usually sends the default bitcoin icon), go to this site and provide the information needed. 

api.techlaunch.io:89/flags/:flag ->
  Replace ":flag" with a country code to get the appropriate url for the flag icon. If there isn't a flag icon for this country, the API will send the default API Icon. 