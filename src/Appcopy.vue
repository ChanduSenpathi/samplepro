<script setup>
  import {
    ref, onMounted
  } from 'vue';

  let user = ref("Chandu Senapathi");
  const status = ref("active");
  let isTrue = ref(false);
  const tasks = ref(['add', 'edit', 'update', 'delete']);
  const newUser = ref('');
  const formIndex = ref(null);
  const getToggle = () => {
    isTrue = !isTrue;
    isTrue ? user.value = "Chandu Senapathi" : user.value = "Un-Known User"
  }
  const addUser = () =>{
    if(formIndex.value !== null) {
      tasks.value[formIndex.value] = newUser.value;
      newUser.value = "";
      formIndex.value = null;
      alert("updated successfully");
    }else{
      if(newUser.value.trim() !== ''){
        tasks.value.push(newUser.value)
        newUser.value = '';
      }else {
        alert("Please Enter the User");
      }
    }
  }
  const deleteUser = (index) => {
    tasks.value.splice(index, 1);
  }
  const editForm = (index) => {
    const edited = tasks.value[index];
    formIndex. value= index;
    newUser.value = edited;
  }

  onMounted(async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const data = await response.json();
      tasks.value = data.map((items) => items.title)
    } catch (error) {
      console.log(error);
      
    }
  })
  
</script>

<template>
  <form @submit.prevent="addUser">
    <label for="email">Enter task</label> <br>
    <input type="text" v-model="newUser"> <br>
    <button type="submit">Submit</button>
  </form>
  <div>
    <h2>Tasks</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button type="button" @click="deleteUser(index)">x</button>
        <button type="button" @click="editForm(index)">Edit</button>
      </li>
    </ul>
  </div>

</template>
