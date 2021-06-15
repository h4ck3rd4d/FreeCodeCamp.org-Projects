
# Timestamp Microservice Project

This is my submission to the Free Code Camp Timestamp Microservice Project. The live site can be found [here](https://catkin-evanescent-lamprey.glitch.me/).

## Primary Technology Stack
Node.js, Express

## Parameters

A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

Your project can handle dates that can be successfully parsed by new Date(date_string)

If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key

An empty date parameter should return the current time in a JSON object with a utc key

## Home page

![Image of Homepage](/images/homepage.png)

## Test view of Unix Date variable i.e. (946598400000)

![Image of Unixdate](/images/unixexample.png)

## Test view of Date-Time format i.e. (1999-12-21)

![Image of Datetime](/images/datetimeexample.png)

## Test view of Error Handling

![Image of Error](/images/errorexample.png)

## Experienced Gained

As this was my first project using these technologies, the whole project was a big learning experience. Overall the hardest part was figuring out the formats for the date out put to match the expected parameters. There wasn't much as far as guidance in the parameters so it just took a lot of trial and error on my part.

