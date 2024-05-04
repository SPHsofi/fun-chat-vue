<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ authStore.authData.login }}`s Messenger
        </q-toolbar-title>

      <LogoutUser />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LogoutUser from 'src/features/auth/components/LogoutUser.vue';
import { useAuthStore } from 'src/features/auth/store/authStore';

const authStore = useAuthStore();
</script>
