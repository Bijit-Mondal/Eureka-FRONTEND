<template>
  <div style="margin-bottom: 6rem;">
    <div style="display: flex; justify-content: flex-end; align-items: center;">
      <span @click="leaderBoard" class="badge text-color glow outfit" style="margin-top: 12vb; cursor: pointer;">Leaderboard</span>
      <span class="badge text-color outfit" style="margin-top: 12vb; margin-right: 1vw;">Max Marks: 50</span>
    </div>
    <div style="display: flex; margin-top: 2.5vb; justify-content: center; align-items: center;">
      <h1 class="text-color outfit">{{levelStore.level+1}}. {{ title }}</h1>
      <vs-tooltip @click="intervalGetHint" text="Get Hint" position="right" >
        <span style="display:block; width: 3em; height: 2em; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#E91A42" class="w-6 h-6 bulb-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </span>
      </vs-tooltip>
    </div>

    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
        <div style="display: flex; flex-direction: column;">
          <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
            <img v-if="imgSrc" alt="Bapi Dutta" :src=imgSrc class="responsive-image">
          </div>
          <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
            <span style="font-size: 1.4rem; text-align:left;" class="outfit" v-html="question">
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
      lastExecutionTime: 0, // Initialize with a value that guarantees the method can be executed immediately
      delayDuration: 20000, // 20 seconds in milliseconds
    }
  },
  methods: {
    getQuestion() {
      this.$vs.loading();
      const {getQuestionById} = useQuesion();
      this.levelStore = useLevelStore(); 
      getQuestionById(this.$route.params.id)
      .then((data)=>{
        this.imgSrc = data.imgSrc;
        this.title = data.title;
        this.question = data.question;
        this.$vs.loading.close();
      }).catch((err)=>{
        console.log(err);
        this.$vs.loading.close();
      })
    },
    intervalGetHint() {
      const currentTime = new Date().getTime();
      // console.log(`Delay ${currentTime - this.lastExecutionTime}`)
      if (currentTime - this.lastExecutionTime >= this.delayDuration) {
        this.getHint();
        this.lastExecutionTime = currentTime;
      } else {
        // You can display a message to the user here indicating they need to wait before trying again
        this.$vs.notify({ title: 'Waitt a bit', text: 'Please wait before getting another hint.', color: 'dark'});
      }
    },
    getHint(){
      this.$vs.loading();
      const {getHintById} = useQuesion();
        getHintById(this.$route.params.id,this.levelStore.hint).then((data)=>{
          this.$vs.loading.close();
          console.log(data.hint);
          this.$vs.notify({ title: 'Hint', text: data.hint, color: 'danger',time:20000});
          this.levelStore.hint +=1;
        }).catch((err)=>{
          this.$vs.loading.close();
          console.log(err);
        })
    },
    leaderBoard(){
      this.$router.push("/winner-list")
    },
    submitAnswer(){ 
      if(this.answer==''){
        this.$vs.notify({title:'Error',text:'I believe in you, you can answer', color: "dark",position: 'top-right',fixed: true});
      }
      const {scoreUpdate} = useScore();
      this.$vs.loading();
      scoreUpdate(this.$route.params.id,this.answer)
      .then((data)=>{
        this.$vs.loading.close();
        if(data.msg == "Correct Answer"){
          this.$vs.notify({title:'Success',text:data.msg, color: "success",position: 'top-right',fixed: true});
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
        }else{
          this.$vs.notify({title:'Error',text:data.msg, color: "dark",position: 'top-right',fixed: true});
        }
      }).catch((err)=>{
        this.$vs.loading.close();
        alert(err);
      })
    },
  },
  created(){
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
