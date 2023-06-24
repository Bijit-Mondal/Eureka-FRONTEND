<template>
    <div>
        <h1 class="text-color outfit" style="margin-top: 20vb;">1. Question title goes here, it can be interesting or boring
        </h1>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div style="display: flex; flex-direction: column;">
                    <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
                        <img src="https://lk77.github.io/vuesax/card.png" class="responsive-image">
                    </div>
                    <div style="display:flex; justify-content: space-around; margin-top: 5ch;">
                        <span style="font-size: 1.4rem;" class="outfit">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</span>
                    </div>
                    <div class="container" style="margin-top: 5ch;">
                        <vs-input class="input_box outfit" size="large" icon="group" label-placeholder="Your Answer"
                            v-model="team" />

                        <vs-button class="input_button outfit" color="#FDBCBC" gradient-color-secondary="#E91A42"
                            type="gradient">Submit</vs-button>
                    </div>
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {

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
</style>
