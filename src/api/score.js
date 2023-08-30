import instance from './axios';
import { useQuesion } from './question';
import { useAuthStore } from "@/store/auth";

const getAuthorizationHeader = (accessToken) => {
    return { Authorization: `Bearer ${accessToken}` };
};

export const useScore = () => {
    const scoreUpdate = async function (QId, answer) {
        const { getAllQuestion } = useQuesion();
        const authStore = useAuthStore();
        const data = JSON.stringify({ QId, answer });
        try {
            const response = await instance.post('/score/add', data, {
                headers: getAuthorizationHeader(authStore.accessToken),
            });
            const res = response.data;
            if (res.msg === "Correct Answer") {
                getAllQuestion();
            }
            return res;
        } catch (err) {
            return err;
        }
    };
    const getResult = async function () {
        const authStore = useAuthStore();
        try {
            const response = await instance.get('/auth/result', {
                headers: getAuthorizationHeader(authStore.accessToken),
            });
            return response;
        } catch (error) {
            console.error('Error fetching result:', error);
        }
    }
    return {
        scoreUpdate,
        getResult
    };
}