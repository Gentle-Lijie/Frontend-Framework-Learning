<template>
    <!-- FavoriteList component template placeholder -->
    <!-- TODO: Show list of saved/favorite cities with actions -->
    <div class="favorite-list">
        <h3>Favorite Cities<button class="add-city" @click="addFavs">Add City</button></h3>
        <div class="cities-container">
            <div class="city-card" v-for="city in favs"
                @click="if (current != city) emitter.emit('change-city', city); else { console.log('Clicked on current city:', city) }"
                :id="city.toLowerCase()">{{ city }}<button class="delete-city" @click.stop="delFavs(city)">x</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="FavoriteList">

    import { ref, onMounted, computed } from 'vue';
    import emitter from '../utils/emitter.ts';
    import { useFavsStore } from '@/stores/counter.ts';
    import CurrentWeather from './CurrentWeather.vue';
    const props = defineProps<{
        currentCity: string;
    }>();
    const favsStore = useFavsStore();
    let favs = ref(favsStore.favCities)
    const current = computed(() => props.currentCity);
    onMounted(() => {
        console.log('FavoriteList mounted with currentCity:', current);
        for (let city of favs.value) {
            if (city.toLowerCase() == current.value.toLowerCase()) {
                console.log('Current city is in favorites:', current);
                document.getElementById(city.toLowerCase())?.classList.add('active');
            }
        }
    });

    emitter.on('change-highlight', (event) => {
        const city = event as string;
        console.log('Received change-highlight event for city:', city);
        for (let c of favs.value) {
            const element = document.getElementById(c.toLowerCase());
            if (element) {
                if (c.toLowerCase() == city.toLowerCase()) {
                    element.classList.add('active');
                    console.log('Highlighted city:', city);
                } else {
                    element.classList.remove('active');
                }
            }
        }
    });

    function addFavs() {
        const city = prompt("Enter city name to add to favorites:");
        if (city) {
            favsStore.add(city);
            favs.value = favsStore.favCities;
            console.log('Added city to favorites:', city);
        }
    }
    function delFavs(city: string) {
        favsStore.remove(city);
        favs.value = favsStore.favCities;
        console.log('Removed city from favorites:', city);
        if (current.value == city) emitter.emit('change-city', favs.value[0] || 'Shanghai');
    }
</script>

<style scoped>
    .favorite-list {
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-lg);
        padding: var(--spacing-lg);
        box-shadow: var(--shadow-light);
        /* width: 500px; */
        width: 100%;
    }

    .favorite-list h3 {
        font-size: var(--font-size-lg);
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--spacing-md);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cities-container {
        display: flex;
        flex-wrap: nowrap;
        gap: var(--spacing-sm);
        overflow-x: auto;
        padding-bottom: var(--spacing-xs);
    }

    .city-card {
        padding: var(--spacing-sm) var(--spacing-md);
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        color: var(--text-primary);
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 120px;
    }

    .city-card:hover {
        background-color: var(--bg-tertiary);
        transform: translateY(-1px);
        box-shadow: var(--shadow-medium);
    }

    .city-card.active {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }

    .delete-city {
        background: none;
        border: none;
        color: var(--error-color);
        cursor: pointer;
        font-size: var(--font-size-lg);
        padding: 0;
        margin-left: var(--spacing-sm);
        transition: color 0.2s ease;
    }

    .delete-city:hover {
        color: #c0392b;
    }

    .add-city {
        background-color: var(--success-color);
        color: white;
        border: none;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        cursor: pointer;
        font-size: var(--font-size-sm);
        transition: background-color 0.2s ease;
    }

    .add-city:hover {
        background-color: #27ae60;
    }
</style>
