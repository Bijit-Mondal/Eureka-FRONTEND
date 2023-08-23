import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            accessToken: null,
            email: null,
        };
    },
    persist: true,
    actions: {
        setAccessToken(token) {
            this.accessToken = token;
        },
        setEmail(email) {
            this.email = email;
        },
        getEmail(){
            return this.email;
        },
        getAccessToken(){
            return this.accessToken;
        },
        logout() {
            this.accessToken = null;
            this.email = null;
        },
    }
});
