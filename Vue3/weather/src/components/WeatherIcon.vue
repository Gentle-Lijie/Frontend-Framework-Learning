<template>
    <!-- WeatherIcon component template placeholder -->
    <!-- TODO: Map weather codes to SVG/icon visuals -->
</template>

<script>
    // TODO: WeatherIcon component logic
</script>

<style scoped>
    .weather-icon {
        display: inline-block;
        width: 64px;
        height: 64px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .weather-icon.sunny {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMTIiIGZpbGw9IiNGRkQ4MDAiLz4KPHBhdGggZD0iTTMyIDh2NHY0SDI4VjhoNFoiIGZpbGw9IiNGRkQ4MDAiLz4KPHBhdGggZD0iTTMyIDUyVjU2SDI4VjUySDMyWiIgZmlsbD0iI0ZGRDgwMCIvPgo8cGF0aCBkPSJNNDggMzJoNFY0OEg0NFYzMmg0WiIgZmlsbD0iI0ZGRDgwMCIvPgo8cGF0aCBkPSJNMCAzMmg0VjQ4SDBWMzJoNFoiIGZpbGw9IiNGRkQ4MDAiLz4KPHBhdGggZD0iTTQ0Ljg0IDIwLjg0bC0yLjgyIDIuODJMMzIgMTYuMTZsLTIuODIgMi44MmwtMi44Mi0yLjgyTDMyIDQ3Ljg0bDIuODItMi44Mkw0Ny44NCAyMy42NnoiIGZpbGw9IiNGRkQ4MDAiLz4KPHBhdGggZD0iTTIzLjE2IDIwLjg0bDIuODIgMi44MkwxNi4xNiAzMmwyLjgyIDIuODJMMjMuMTYgNDMuMTZsLTIuODItMi44MkwxNi4xNiAzMmwxMC4xNi0xMC4xNnoiIGZpbGw9IiNGRkQ4MDAiLz4KPC9zdmc+');
    }

    .weather-icon.cloudy {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iMTIiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTQ4IDQwSDI0YTIwIDIwIDAgMCAwIDAgNDBoMjRhMjAgMjAgMCAwIDAgMC00MFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+');
    }

    .weather-icon.rainy {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSI0MCIgcj0iMTIiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTQ4IDQwSDI0YTIwIDIwIDAgMCAwIDAgNDBoMjRhMjAgMjAgMCAwIDAgMC00MFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTI0IDI0djhoNFYyNFoiIGZpbGw9IiMwMDg0RkYiLz4KPHBhdGggZD0iTTMyIDI0djhoNFYyNFoiIGZpbGw9IiMwMDg0RkYiLz4KPHBhdGggZD0iTTQwIDI0djhoNFYyNFoiIGZpbGw9IiMwMDg0RkYiLz4KPC9zdmc+');
    }
</style>
