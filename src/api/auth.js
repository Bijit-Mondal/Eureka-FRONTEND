import instance from './axios.js';
import { useAuthStore } from '@/store/auth';
import { useQuesion } from './question';
import { useLevelStore } from '@/store/level';

export const useAuth = () => {
  const createAccount = async function (email, teamName) {
    const authStore = useAuthStore();
    const data = JSON.stringify({ email, teamName });
    console.log(instance);
    try {
      const response = await instance.post('/auth/enter', data);
      if (response.data.accessToken) {
        authStore.setAccessToken(response.data.accessToken);
        authStore.setEmail(response.data.email);
      }
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const login = async function (password) {
    const authStore = useAuthStore();
    const email = authStore.getEmail();
    const levelStore = useLevelStore();
    const { getAllQuestion } = useQuesion();
    const data = JSON.stringify({ email, password });

    try {
      const response = await instance.post('/auth/login', data);
      if (response.data.accessToken) {
        authStore.setAccessToken(response.data.accessToken);
        authStore.setEmail(response.data.email);
        levelStore.setLevel(-1);
        getAllQuestion();
      }
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return {
    createAccount,
    login,
  };
};
