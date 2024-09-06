<script setup>
import { ref } from 'vue'
import { saveAs } from 'file-saver'

const fileInput = ref(null)
useFetch(`/api/excell/clear`, { method: 'POST' })

const handleMergeExcel = async () => {
    const res = await $fetch('/api/excell/merge', {
        method: 'POST'
    });
    saveAs(res)
}

const handleUploadExcel = async () => {
    const formData = new FormData()
    for (let i = 0; i < fileInput.value.files.length; i++) {
        formData.append('files', fileInput.value.files[i])
    }

    try {
        await $fetch('/api/excell/upload', {
            method: 'POST',
            body: formData
        });
        alert('Files uploaded successfully');
    } catch (error) {
        alert('Error uploading files');
    }
}
</script>

<template>
    <div class="main">
        <div class="centered">
            <input ref="fileInput" type="file" name="file" webkitdirectory directory @change="handleUploadExcel">
            <button @click="handleMergeExcel">Merge Excels</button>
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