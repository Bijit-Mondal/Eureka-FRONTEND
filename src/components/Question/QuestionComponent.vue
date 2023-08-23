<template>
  <div style="margin-bottom: 6rem;">
    <div style="display: flex; justify-content: flex-end; align-items: center;">
      <span class="badge text-color glow outfit" style="margin-top: 12vb;">Marks: {{levelStore.score}}</span>
    </div>
    <div style="display: flex; margin-top: 2.5vb; justify-content: center; align-items: center;">
      <h1 class="text-color outfit">{{levelStore.level+1}}. {{ title }}</h1>
      <span style="width: 3em; height: 2em;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E91A42" class="w-6 h-6 bulb-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      </span>
    </div>

    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
        <div style="display: flex; flex-direction: column;">
          <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
            <img v-if="imgSrc" :src=imgSrc class="responsive-image">
          </div>
          <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
            <span style="font-size: 1.4rem;" class="outfit">
              {{ question }}
            </span>
          </div>

          <div class="container" style="margin-top: 5ch;">
            <vs-input class="input_box outfit" size="large" icon="group" required label-placeholder="Your Answer" v-model="answer" />

            <vs-button @click="submitAnswer" class="input_button outfit" color="#FDBCBC" gradient-color-secondary="#E91A42"
              type="gradient">Submit</vs-button>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { useQuesion } from '@/api/question';
import { useScore } from '@/api/score';
import { useLevelStore } from '@/store/level';
export default {
  data() {
    return {
      imgSrc: '',
      title: '',
      question: '',
      answer: '',
      levelStore: '',
    }
  },
  methods: {
    getQuestion() {
      this.$vs.loading();
      const {getQuestionById} = useQuesion();
      this.levelStore = useLevelStore(); 
      getQuestionById(this.$route.params.id)
      .then((data)=>{
        console.log (this.hints);
        this.imgSrc = data.imgSrc;
        this.title = data.title;
        this.question = data.question;
        this.getHint(data.hints);
        this.$vs.loading.close();
      }).catch((err)=>{
        console.log(err);
        this.$vs.loading.close();
      })
    },
    getHint(hints){
      const maxHints = hints.length;
      const intervalFunction = () => {
        if (this.levelStore.hintUsed < maxHints) {
          this.$vs.notify({ title: 'Hint', text: hints[this.levelStore.hintUsed], color: 'danger',time:10000});
          this.levelStore.hintUsing();
          this.levelStore.setScore()
        } else {
          clearInterval(this.interval);
        }
      };
      this.interval = setInterval(intervalFunction, 10000);
    },
    submitAnswer(){ 
      if(this.answer==''){
        this.$vs.notify({title:'Error',text:'I believe in you, you can answer', color: "dark",position: 'top-right',fixed: true});
      }
      const {scoreUpdate} = useScore();
      scoreUpdate(this.$route.params.id,this.answer,this.levelStore.score)
      .then((data)=>{
        if(data.msg == "Correct Answer"){
          this.$vs.notify({title:'Success',text:data.msg, color: "success",position: 'top-right',fixed: true});
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
        }else{
          this.$vs.notify({title:'Error',text:data.msg, color: "dark",position: 'top-right',fixed: true});
        }
      }).catch((err)=>{
        alert(err);
      })
    }
  },
  mounted(){
    this.getQuestion();
  }
}
</script>

<style lang="stylus">
.cardx
  margin 15px

.responsive-image 
  max-width: 100%;
  height: auto;

.container
  display flex
  flex-direction column
  align-items center
  justify-content flex-start
  height fit-content

.input_box
  width: 20em
  margin-top 3em
.input_button
  width: 24em
  margin-top 1em

.badge
  padding: 0.5em 1em;
  color: #E91A42;
  border: 2px solid #E91A42;
  border-radius: 0.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 1em;
@keyframes glow-animation {
    0% {
      box-shadow: 0 0 5px #E91A42, 0 0 20px #E91A42;
    }
    50% {
      box-shadow: 0 0 15px #E91A42, 0 0 25px #E91A42;
    }
    100% {
      box-shadow: 0 0 5px #E91A42, 0 0 20px #E91A42;
    }
  }
  
.glow 
  animation: glow-animation 1.5s infinite;

.bulb-icon
  margin-left: 0.5em;

</style>