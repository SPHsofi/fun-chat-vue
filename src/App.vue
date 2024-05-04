<template>
  <router-view />
</template>

<script setup lang="ts">
import { useAuthStore } from './features/auth/store/authStore';
import { ws } from './shared/api/ws';

interface Data {
  id: string | null,
  type: string,
  payload: any
}

interface Types {
  [key: string]: () => void
}

const authStore = useAuthStore();

const types: Types = {
  USER_LOGIN: authStore.handleUserLogin,
  USER_LOGOUT: authStore.handleUserLogout,
};

ws.addEventListener('message', (event) => {
  event.preventDefault();
  const data: Data = JSON.parse(event.data);
  const action = types[data.type];
  action();
});
</script>
