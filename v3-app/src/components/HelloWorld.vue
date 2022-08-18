<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ToDoList } from '../types/TodoList';

const data = reactive<ToDoList>({
  title: '',
  list: []
})

const addTodo = () => {
  data.list.push({
    id: data.list.length + 1,
    title: data.title,
    state: 0,
  })
}

</script>

<template>
  <div>
    <input v-model="data.title" type="text" placeholder="TODO" />
    <button @click="addTodo">Add</button>
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>State</th>
      </tr>
      <tr v-for="i in data.list" :key="i.id">
        <td>{{ i.id }}</td>
        <td>{{ i.title }}</td>
        <td>{{ i.state }}</td>
      </tr>
    </table>
  </div>
</template>


