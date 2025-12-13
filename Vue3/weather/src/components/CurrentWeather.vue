<template>
    <div class="current-weather">
        <h2>{{ city }}</h2>
        <div class="weather-main">
            <div class="temperature">{{ tempC }}°C</div>
            <div class="date">{{ date }}</div>
            <div class="condition">{{ weatherDesc }}</div>
        </div>
        <div class="weather-details">
            <div class="detail-item">
                <span class="label">Feels Like</span>
                <hr />
                <span class="value">{{ feelsLikeC }}°C</span>
            </div>
            <div class="detail-item">
                <span class="label">Humidity</span>
                <hr />
                <span class="value">{{ humidity }}%</span>
            </div>
            <div class="detail-item">
                <span class="label">Wind Speed</span>
                <hr />
                <span class="value">{{ windspeedKmph }} km/h</span>
            </div>
            <div class="detail-item">
                <span class="label">Pressure</span>
                <hr />
                <span class="value">{{ pressure }} hPa</span>
            </div>
            <div class="detail-item">
                <span class="label">Visibility</span>
                <hr />
                <span class="value">{{ visibility }} km</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="CurrentWeather">
    import emitter from '@/utils/emitter';
    import { computed } from 'vue';
    const props = defineProps<{
        data: any;
        city: string;
    }>();
    const city = computed(() => props.city);
    const data = computed(() => props.data);
    const feelsLikeC = computed(() => data.value?.FeelsLikeC || '--');
    const humidity = computed(() => data.value?.humidity || '--');
    const pressure = computed(() => data.value?.pressure || '--');
    const tempC = computed(() => data.value?.temp_C || '--');
    const weatherDesc = computed(() => data.value?.weatherDesc[0]?.value || '--');
    const windspeedKmph = computed(() => data.value?.windspeedKmph || '--');
    const visibility = computed(() => data.value?.visibility || '--');
    // "localObsDateTime": "2025-12-13 11:06 PM",
    const localObsDateTime = computed(() => data.value?.localObsDateTime || '--');
    const date = computed(() => localObsDateTime.value.split(' ')[0] || '--');
    // TODO: CurrentWeather component logic


</script>

<style scoped>
    .current-weather {
        text-align: center;
    }

    .weather-main {
        margin-bottom: var(--spacing-lg);
    }

    .temperature {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: var(--spacing-sm);
    }

    .date {
        font-size: var(--font-size-lg);
        color: var(--text-secondary);
        margin-bottom: var(--spacing-sm);
    }

    .condition {
        font-size: var(--font-size-xl);
        color: var(--text-primary);
        margin-bottom: var(--spacing-md);
    }

    .weather-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: var(--spacing-md);
    }

    .detail-item {
        background-color: var(--bg-secondary);
        padding: var(--spacing-md);
        border-radius: var(--border-radius-md);
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xs);
    }

    .label {
        font-weight: 600;
        color: var(--text-secondary);
        font-size: var(--font-size-sm);
    }

    .detail-item hr {
        width: 60px;
        border: none;
        border-top: 1px solid var(--border-color);
        margin: 0;
    }

    .value {
        font-size: var(--font-size-base);
        color: var(--text-primary);
        font-weight: 500;
    }
</style>
