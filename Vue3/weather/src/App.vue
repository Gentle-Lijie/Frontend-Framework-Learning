<template>
  <div class="weather-app">
    <header class="header">
      <h1>Weather App</h1>
    </header>
    <main class="main-content container">
      <Loading />
      <section class="search-section">
        <SearchBar />
      </section>
      <section class="favorites-section">
        <FavoriteList :currentCity="currentCity" />
      </section>
      <section class="weather-display">
        <div class="weather-card">
          <h2 class="text-xl font-semibold mb-md">Current Weather</h2>
          <CurrentWeather :city="currentCity" :data="weatherResponse" />
        </div>
        <div class="weather-card">
          <h2 class="text-xl font-semibold mb-md">Weather Forecast</h2>
          <Forecast :data="forecastResponse" />
        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts" name="App">
  // import relevant API from API
  import { onMounted, ref } from 'vue';
  import emitter from './utils/emitter.ts';
  import { fetchWeatherByCity, fetchForecastByCity } from './api/weather.ts';
  import SearchBar from './components/SearchBar.vue';
  import FavoriteList from './components/FavoriteList.vue';
  import CurrentWeather from './components/CurrentWeather.vue';
  import Forecast from './components/Forecast.vue';
  import Loading from './components/Loading.vue';
  let currentCity = ref('Shanghai');
  let weatherResponse = ref<any>(null);
  let forecastResponse = ref<any>(null);

  async function callAPI(cityName?: string) {
    emitter.emit('start-loading');
    // Example usage of the imported API functions
    const city = typeof (cityName) == "string" ? ref(cityName) : ref('Shanghai');
    console.log('Testing Weather API for city:', city.value);

    // 等待两个API调用完成
    const [weatherData, forecastData] = await Promise.all([
      fetchWeatherByCity(city.value),
      fetchForecastByCity(city.value)
    ]);

    // 处理天气数据
    console.log('API Response: Current Weather:', weatherData);
    console.log(city.value + "'s temperature is " + weatherData!.FeelsLikeC + "°C");
    console.log(city.value + "'s weather condition is " + weatherData!.weatherDesc[0]?.value);
    weatherResponse.value = weatherData;
    console.log('Updated weatherResponse:', weatherResponse.value);

    // 处理预报数据
    console.log('API Response: Weather Forecast:', forecastData);
    console.log(city.value + "'s forecast for " + forecastData![0]!.date + ": " + forecastData![0]?.avgtempC + "°C, " + forecastData![0]?.hourly[0]?.weatherDesc[0]?.value);
    console.log(city.value + "'s forecast for " + forecastData![1]!.date + ": " + forecastData![1]?.avgtempC + "°C, " + forecastData![1]?.hourly[0]?.weatherDesc[0]?.value);
    console.log(city.value + "'s forecast for " + forecastData![2]!.date + ": " + forecastData![2]?.avgtempC + "°C, " + forecastData![2]?.hourly[0]?.weatherDesc[0]?.value);
    forecastResponse.value = forecastData;
    console.log('Updated forecastResponse:', forecastResponse.value);

    emitter.emit('stop-loading');
  }
  emitter.on('change-city', (event) => {
    const city = event as string;
    console.log('Change city event received:', city);
    currentCity.value = city;
    callAPI(city);
    emitter.emit('change-highlight', city);
  });

  onMounted(() => {
    console.log('App mounted. Initializing with city:', currentCity.value);
    callAPI(currentCity.value);
  });

</script>

<style>

  /* App 组件特定样式 */
  .weather-app {
    min-height: 100vh;
  }

  .favorites-section {
    margin-bottom: var(--spacing-xl);
  }

  .mb-md {
    margin-bottom: var(--spacing-md);
  }

  .mt-lg {
    margin-top: var(--spacing-lg);
  }
</style>