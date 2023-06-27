<template>
    <div class="login-container">
        <h1 class="text-color outfit">Create Account to start with <span class="anurati">EUREKA</span></h1>
        <div class="container centerx">
            <vs-input
              class="input_box outfit"
              :success="isEmailValid"
              size="large"
              icon="email"
              success-text="The mail is valid"
              label-placeholder="Enter Email Address"
              v-model="email"
              @keyup="emailValidate"
            />

            <vs-input
                class="input_box outfit"
                size="large"
                icon="group"
                label-placeholder="Enter Team Name"
                v-model="team"
            />

            <vs-button to="/quiz/1" class="input_button outfit" color="#FDBCBC" gradient-color-secondary="#E91A42" type="gradient">Sign In</vs-button>
        </div>
    </div>
</template>
  
<script>
  export default{
    data(){
        return{
            email:'',
            team:'',
            isEmailValid:false
        }
    },
    methods:{
        emailValidate() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isEmailValid = emailRegex.test(this.email);
        }
    }
  }
</script>
<style lang="stylus" scoped>

.login-container{
    margin: auto 0;
}

.container
  display flex
  flex-direction column
  align-items center
  justify-content flex-start
  height fit-content

input[type="text"]
    width: 200px
.input_box
    width: 20em
    margin-top 3em
.input_button
    width: 24em
    margin-top 3em
</style>