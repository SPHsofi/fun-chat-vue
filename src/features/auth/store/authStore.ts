import { defineStore } from 'pinia';
import { ws } from 'src/shared/api/ws';
import createJsonMessage from 'src/shared/helpers/helpers';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  // ----------------- Отправка на сервер ---------------------- //
  const authData = reactive({
    login: '',
    password: '',
  });

  function userLogin() {
    const jsonData = createJsonMessage('USER_LOGIN', {
      user: {
        login: authData.login,
        password: authData.password
      }
    });

    ws.send(jsonData);

    sessionStorage.setItem('user', JSON.stringify(authData));
  }

  function userLogout() {
    const jsonData = sessionStorage.getItem('user');

    if (jsonData) {
      const user: { login: string, password: string } = JSON.parse(jsonData);
      const jsonMessage = createJsonMessage('USER_LOGOUT', {
        user: {
          login: user.login,
          password: user.password,
        },
      });

      ws.send(jsonMessage);
    }
  }
  // ---------------- Обработка ответов с сервера -------------- //

  const router = useRouter();

  function handleUserLogin() {
    router.push('/');
  }

  function handleUserLogout() {
    sessionStorage.removeItem('user');
    router.push('/auth');
  }

  return {
    authData,
    userLogin,
    handleUserLogin,
    userLogout,
    handleUserLogout,
  };
});
