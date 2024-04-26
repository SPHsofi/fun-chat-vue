<template>
  <form class="form">
    <q-input
      v-model="login"
      label="Login"
      error-message="Please use maximum 4 characters"
      :error="!validation.isLoginValid"
    />
    <q-input
    v-model="password"
    label="password"
    error-message="Please use maximum 6 characters"
    :error="!validation.isPassword"
    />
    <q-btn type="submit">Login</q-btn>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const login = ref('');
const password = ref('');

const validation = computed(() => {
  return {
    isLoginValid: login.value.length >= 4,
    isPassword: password.value.length >= 6,
  };
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
