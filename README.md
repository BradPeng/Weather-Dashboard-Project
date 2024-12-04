# Weather Dashboard

A simple weather dashboard that allows users to check the current weather by entering the latitude and longitude coordinates. Users can also choose the temperature unit (Celsius or Fahrenheit).

## Features
- Users can input latitude and longitude coordinates to retrieve the weather data.
- Option to select temperature units: Celsius (metric) or Fahrenheit (imperial).
- Uses the OpenWeatherMap API to fetch weather data.

## Project Setup

### Prerequisites
1. Create an account on [OpenWeatherMap](https://openweathermap.org/).
2. Get your own **API key** from OpenWeatherMap.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
2. Add your own API key

    In order to access the OpenWeatherMap API, you need to create an account and get your own API key. You can sign up and get your key [here](https://home.openweathermap.org/users/sign_in).

    Once you have your API key, follow these steps:

    1. Create a `config.js` file in the root of the project. This file should **not** be committed to the repository for security reasons.
    2. Inside `config.js`, export your API key.

    **Example `config.js`:**

    ```js
    // config.js
    export const API_KEY = 'your-api-key-here';

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
