<template>
  <q-btn @click="onClick">Logout</q-btn>
</template>

<script setup lang="ts">
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();

function onClick() {
  authStore.userLogout();
}
</script>
