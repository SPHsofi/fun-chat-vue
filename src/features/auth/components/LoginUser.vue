<template>
  <q-form @submit.prevent="onSubmit" class="form">
    <q-input v-model="authStore.authData.login" label="Login" />
    <q-input v-model="authStore.authData.password" label="pass  word" />
    <q-btn type="submit">Login</q-btn>
  </q-form>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();

function onSubmit() {
  authStore.userLogin();
}

</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
