<script setup>

// async functions
const handleMergeExcel = async () => {
    await $fetch(`${window.location.protocol}//${window.location.host}/api/excell/merge`, {
        method: 'POST'
    });
}
</script>

<template>
    <div class="main">
        <div class="centered">
            <button @click="handleMergeExcel">Merge Excel</button>
        </div>
    </div>
</template>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background-color: rgb(25, 25, 25);
    position: fixed;
    top: 0;
    left: 0
}

.centered {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.status {
    font-size: larger;
}

button {
    cursor: pointer;
}
</style>