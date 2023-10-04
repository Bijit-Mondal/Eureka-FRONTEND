<template>
    <div style="margin-bottom: 6rem; height: 100%;">
        <div style="display: flex; justify-content: flex-end; align-items: center;">
            <span @click="back" style="margin-top: 12vb; cursor: pointer; width: 1.5vw;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </span>
        </div>
        <div style="display: flex; margin-top: 2.5vb; justify-content: center; align-items: center;">
            <table class="content-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Avatar</th>
                        <th>Team</th>
                        <th>Level</th>
                        <th>Points</th>
                        <th>Finished Time</th>
                        <th>Hint Used</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in result.teams" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>
                            <vs-avatar size="large" :src="generateAvatarURL(item.teamName)" />
                        </td>
                        <td>{{ item.teamName }}</td>
                        <td>{{ item.level }}</td>
                        <td>{{ item.totalMarks }}</td>
                        <td>{{ item.updatedAt[2] }}-{{ item.updatedAt[1] }}-{{ item.updatedAt[0] }} at {{ item.updatedAt[3]
                        }}:{{ item.updatedAt[4] }} </td>
                        <td>{{ item.hintUsed }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import { useScore } from "@/api/score";
export default {
    data: () => ({
        result: [],
        time: Date.now()
    }),
    methods: {
        generateAvatarURL(teamName) {
            return `https://api.dicebear.com/6.x/notionists-neutral/svg?seed=${teamName}`;
        },
        getResultMethod() {
            const { getResult } = useScore();
            getResult()
                .then((res) => {
                    this.result = res.data;
                    // console.log(this.result.teams);
                }).catch(err => {
                    console.log(err);
                })
        },
        back() {
            this.$router.push("/")
        }
    },
    created() {
        this.getResultMethod();
    }
}
</script>
  
<style lang="stylus">
  .fixed-footer
    display: none !important

  .content-table 
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  
.content-table thead tr 
    background: linear-gradient(to right, #e91a43, #ff4081);
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  
  
  .content-table th,
  .content-table td {
    padding: 12px 15px;
  }
  
  .content-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  
  .content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  
  .content-table tbody tr:last-of-type {
    border-bottom: 2px solid #ff4081;
  }
  
  .content-table tbody tr.active-row {
    font-weight: bold;
    color: text-color
  }
  </style>
  