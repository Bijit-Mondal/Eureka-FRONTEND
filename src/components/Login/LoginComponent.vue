<template>
<div style="margin-bottom: 6rem;">
    <div class="login-container">
        <h1 class="text-color outfit">Welcome to EUREKA <br><br></h1>
        <div class="container centerx">
            <h2>আয় তোর মুণ্ডুটা দেখি, আয় দেখি 'ফুটোস্কোপ' দিয়ে<br>
            দেখি কত ভেজালের মেকি আছে তোর মগজের ঘিয়ে ।<br>
            কোন্‌ দিকে বুদ্ধিটা খোলে, কোন্‌ দিকে থেকে যায় চাপা ;<br>
            কতখানি ভস্‌ ভস্‌ ঘিলু, কতখানি ঠক্‌ ঠকে কাঁপা ।<br><br></h2>
        </div>
        <h1 class="text-color outfit">Create Account to start with <span class="anurati">EUREKA</span></h1>
        <div class="container centerx">
            <vs-input class="input_box outfit" :success="isEmailValid" size="large" icon="email"
                success-text="The mail is valid" label-placeholder="Enter Email Address" v-model="email"
                @keyup="emailValidate" />

            <vs-input class="input_box outfit" size="large" icon="group" label-placeholder="Enter Team Name"
                v-model="team" />

            <vs-button @click="create" class="input_button outfit" color="#FDBCBC" gradient-color-secondary="#E91A42"
                type="gradient">Sign In</vs-button>
        </div>
    </div>
</div>
</template>
  
<script>
import { useAuth } from "@/api/auth";
import { useLevelStore } from "@/store/level";
export default {
    data() {
        return {
            email: '',
            team: '',
            isEmailValid: false
        }
    },
    methods: {
        emailValidate() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isEmailValid = emailRegex.test(this.email);
        },
        create() {
            this.$vs.loading();
            const { createAccount } = useAuth();
            const levelStore  = useLevelStore();
            createAccount(this.email, this.team)
                .then((res) => {
                    this.$vs.loading.close();
                    console.log(res);
                    if (res.error) {
                        this.Notification('Error', res.error)
                    } if (!res.accessToken) {
                        this.Notification('Error', res.message +" "+ res.error)
                    } else {
                        this.Notification('Account Created with ', res.email + " check you email")
                        setTimeout(() => {
                            this.$router.push(levelStore.nextURI);
                        }, 2000);
                    }
                }).catch((err) => {
                    this.Notification('Error', err);
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
.login-container
    margin: auto 0;
    padding-bottom 100px


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
