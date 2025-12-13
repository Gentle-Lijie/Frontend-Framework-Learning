<template>
    <div class="forecast">
        <h2>3-Day Forecast</h2>
        <div class="forecast-container">
            <div class="forecast-item" v-for="day in data" :key="day.date">
                <span class="date">{{ day.date }}</span>
                <span class="day">{{ getDayOfWeek(day.date) }}</span>
                <span class="temp">{{ day.mintempC }}°C ~ {{ day.maxtempC }}°C</span>
                <span class="condition">{{ day.hourly[0]?.weatherDesc[0]?.value }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="Forecast">
    import { computed, ref } from 'vue';
    const props = defineProps<{
        data: any;
    }>();
    /*
        date
        maxtempC
        mintempC
        hourly[0]?.weatherDesc[0]?.value
    */
    function getDayOfWeek(dateString: string) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dateString);
        return days[date.getDay()];
    }
    const data = computed(() => props.data);
</script>

<style scoped>
    .forecast {
        text-align: center;
    }

    .forecast h2 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--spacing-lg);
    }

    .forecast-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .forecast-item {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-md);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-md);
    }

    .forecast-item:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
    }

    .date {
        font-weight: 600;
        color: var(--text-primary);
        font-size: var(--font-size-sm);
        width: 120px;
        text-align: center;
    }

    .day {
        font-weight: 500;
        color: var(--text-secondary);
        font-size: var(--font-size-base);
        width: 20px;
        text-align: center;
    }

    .temp {
        font-size: var(--font-size-xl);
        font-weight: 700;
        color: var(--primary-color);
        width: 180px;
        text-align: center;
    }

    .condition {
        font-size: var(--font-size-sm);
        color: var(--text-secondary);
        text-transform: capitalize;
        width: 80px;
        text-align: center;
    }
</style>
