<script setup>
import { saveAs } from 'file-saver'

const handleMergeExcel = async () => {
    const res = await $fetch(`${window.location.protocol}//${window.location.host}/api/excell/merge`, {
        method: 'POST'
    });
    saveAs(res)
}

const handleUploadExcel = async () => {
    await $fetch(`${window.location.protocol}//${window.location.host}/api/excell/upload`, {
        method: 'POST'
    });
}
</script>

<template>
    <div class="main">
        <div class="centered">
            <button @click="handleUploadExcel">Upload Excel</button>
            &nbsp;&nbsp;&nbsp;
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