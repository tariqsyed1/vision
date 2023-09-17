# Vision

<img align="right" src="vision.png" width="50%" height="50%">

## Overview

<p>'Vision' is a web application designed to turn your Raspberry Pi or any other suitable device into an 'always-on' display that provides essential information at a glance. The app features a minimalist custom-built user interface created with React and showcases the current time, weather, and the currently playing song on Spotify.</p>

## Motivation
<p>Many of us have spare screens or devices that are underutilized. 'Vision' was born out of the desire to make better use of these screens by providing real-time, at-a-glance information. Whether you have a spare Raspberry Pi or an old monitor, you can repurpose it as an informative and aesthetically pleasing display.</p>

## Features
- Always-On Display: 'Vision' is designed to run continuously, making it perfect for repurposed devices.
- Time Display: Keep track of the current time with a sleek digital clock.
- Weather Updates: Get real-time weather updates for your location.
- Spotify Integration: Stay connected with your music by displaying the currently playing song on Spotify.
- Customizable: Easily customize the appearance and layout to suit your preferences.

## Getting Started
Follow these steps to set up 'Vision' on your Raspberry Pi or other suitable device:

1. Clone the Repository: Clone this GitHub repository to your device.
```
bash
Copy code
git clone https://github.com/yourusername/vision-app.git
```
2. Install Dependencies: Navigate to the project directory and install the necessary dependencies.
```
bash
Copy code
cd vision-app
npm install
```
3. Configuration: Configure the app with your preferences, such as location for weather updates.

4. Run the App: Start the 'Vision' app on your device.
```
bash
Copy code
npm start
```
5. Access the App: Open a web browser and navigate to http://localhost:3000 to see 'Vision' in action.

6. Set as 'Always-On' Display: Depending on your device and operating system, set the app to auto-start on boot for a true 'always-on' display.

## Configuration
You can customize the app by modifying the config.js file in the project root. This file allows you to specify your location for weather updates and tweak other settings to your liking.
```
module.exports = {
  weatherApiKey: 'YOUR_WEATHER_API_KEY',
  location: 'YourCity, YourCountry',
  // Add more configuration options here as needed
};
```

## Acknowledgments
- Inspiration for this project came from the desire to repurpose underutilized screens.
- Thanks to the open-source community for the amazing tools and APIs that make this project possible.

## Contact
Have questions or suggestions? Free free to contact me at `hello@tariqsyed.dev`

Enjoy using Vision as your always-on display web app!
