Build a full stack JavaScript app that is functionally similar to this: https://timestamp-microservice.freecodecamp.rocks. Working on this project will involve you writing your code using one of the following methods:

Note: Time zones conversion is not a purpose of this project, so assume all sent valid dates will be parsed with new Date() as GMT dates.

Features
1:You should provide your own project, not the example URL.
2:A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
3:A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
4:A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
5:Your project can handle dates that can be successfully parsed by new Date(date_string)
6:If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
7:An empty date parameter should return the current time in a JSON object with a unix key
8:An empty date parameter should return the current time in a JSON object with a utc key