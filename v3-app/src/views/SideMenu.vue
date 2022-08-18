<template>
    <div class="sidenav">
        <SearchInput />
    </div>
</template>

<script setup lang="ts">
import ToDoCard from '../components/ToDoCard.vue';
import SearchInput from '../components/SearchInput.vue';
</script>

<style scoped>
.sidenav {
    display: flex;
    height: 100%;
    width: 40%;
    position: fixed;
    padding: 10px;
    background-color: rgb(233, 227, 233);
}
</style>