## Weather App
This project is a weather app built using Next.js, TypeScript, Tailwind CSS, and several React libraries. It provides current weather details, hourly predictions, and additional information such as visibility, humidity, wind speed, air pressure, sunrise, and sunset. Users can view weather details for their current location or search by location name.
## Weather App Live Link
https://mausamrandom.netlify.app/
## Project Structure
```bash
src/
├── app/
│   ├── components/
│   │   ├── Container.tsx               # Main container component
│   │   ├── ForecastWeatherDetails.tsx  # Component for displaying forecast details
│   │   ├── Navbar.tsx                  # Navigation bar component
│   │   ├── SearchBox.tsx               # Location search box component
│   │   ├── WeatherDetails.tsx          # Component for displaying weather details
│   │   ├── WeatherIcon.tsx             # Component for displaying weather icons
│   ├── utils/
│   │   ├── cn.ts                       # Utility for handling classNames
│   │   ├── convertKelvinToCelsius.ts   # Utility to convert Kelvin to Celsius
│   │   ├── convertWindSpeed.ts         # Utility to convert wind speed
│   │   ├── getDayOrNightIcon.ts        # Utility to get day or night icon
│   │   ├── metersToKilometers.ts       # Utility to convert meters to kilometers
│   │   ├── atom.ts                     # Utility for managing app state
├── favicon.ico                         # App favicon
├── globals.css                         # Global CSS styles
├── layout.tsx                          # Layout component
├── page.tsx                            # Main page component
.env.local                              # Local environment file for API keys
```
## Installation
To Run this project locally,follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/abhayahlawat/weather_project.git
cd weather-project
```
2. Install dependencies:
```bash
npm install
npm install react-icons --save
npm install react-query
npm install axios
npm install date-fns@3.6.0
npm install jotai
npm install clsx
npm install tailwind-merge
```
3: Run the development server:
```bash
npm run dev
```
4: Open your browser and navigate to http://localhost:3000 to view the app.
## Usage
1: Upon launching the app, weather details for India are displayed by default.
2: Click on the "Current Location" button to fetch weather details based on your current location.
3: Use the search bar to find weather information for specific locations.
## API Key
The API key is stored in the .env.local file for security purposes.
## Technology Used
Next.js, TypeScript, Tailwind CSS, React Icons, React Query, Axios, Date-fns, Jotai.
## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.
## License
This project is licensed under the MIT License.
