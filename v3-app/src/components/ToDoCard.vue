<template>
    <div>
        <div>
            {{ count }}
        </div>
        <p> {{ title }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0);
const title = ref('');

</script>