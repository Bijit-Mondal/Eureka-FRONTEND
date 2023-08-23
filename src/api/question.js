import instance from './axios';
import { useLevelStore } from "@/store/level";
import { useAuthStore } from "@/store/auth";

const getAuthorizationHeader = (accessToken) => {
  return { Authorization: `Bearer ${accessToken}` };
};

export const useQuesion = () => {
  const getAllQuestion = async function () {
    const levelStore = useLevelStore();
    const authStore = useAuthStore();
    try {
      const response = await instance.get('/question/', {
        headers: getAuthorizationHeader(authStore.accessToken),
      });
      const data = response.data;
      levelStore.allQuestion = data;
      if (data.questionId) {
        levelStore.level +=1;
        let uri;
        if(levelStore.level< levelStore.allQuestion.noquestion){
          uri = "/quiz/" + data.questionId[levelStore.level];
        }else{
          uri = "/winner-list";
        }
        levelStore.setnextURI(uri);
        levelStore.score = null;
        levelStore.setHint(0);
      }
      return data;
    } catch (error) {
      console.error('Error fetching all questions:', error);
    }
  };

  const getQuestionById = async function (questionId) {
    const authStore = useAuthStore();
    const levelStore = useLevelStore();
    if(levelStore.score==null){
      levelStore.score = 50;
      levelStore.hintUsed = 0;
    }
    try {
      const response = await instance.get(`/question/get/${questionId}`, {
        headers: getAuthorizationHeader(authStore.accessToken),
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error(`Error fetching question with ID ${questionId}:`, error);
    }
  };

  return {
    getAllQuestion,
    getQuestionById,
  };
};
