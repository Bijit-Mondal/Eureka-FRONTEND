<template>
    <div class="login-container">
        <h1 class="text-color outfit">Re login in  <span class="anurati">EUREKA</span></h1>
        <div class="container centerx">
            <vs-input class="input_box outfit" :success="isEmailValid" size="large" icon="email"
                success-text="The mail is valid" label-placeholder="Enter Email Address" v-model="email"
                @keyup="emailValidate" />

            <vs-input class="input_box outfit" size="large" icon="group" label-placeholder="Previous OTP"
                v-model="otp" />

            <vs-button @click="relogin" class="input_button outfit" color="#FDBCBC" gradient-color-secondary="#E91A42"
                type="gradient">Login</vs-button>
        </div>
    </div>
</template>

  
<script>
import { useAuth } from "@/api/auth";
export default {
    data() {
        return {
            email: '',
            otp: '',
            isEmailValid: false
        }
    },
    methods: {
        emailValidate() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isEmailValid = emailRegex.test(this.email);
        },
        relogin() {
            this.$vs.loading();
            const { relogin } = useAuth();
            relogin(this.email,this.otp)
                .then((res) => {
                    this.$vs.loading.close();
                    if (res.error) {
                        this.Notification('Error', res.error);
                    } if (!res.accessToken) {
                        this.Notification('Error', res.message);
                    } else {
                        this.Notification('Success', 'You are correct, let\'s start ');
                        setTimeout(() => {
                            this.$router.push('/');
                        }, 2000);
                    }
                }).catch((err) => {
                    console.log(err);
                })
        },
        Notification(title, msg) {
            this.$vs.notify({
                title: title,
                text: msg,
                color: "dark",
                position: 'top-right',
                fixed: true,
            })
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