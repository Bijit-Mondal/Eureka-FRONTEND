<template>
    <div class="winner-div">
        <table class="content-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Avatar</th>
                    <th>Team</th>
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
                    <td>{{ item.totalMarks }}</td>
                    <td>{{ formatTime(item.updatedAt) }}</td>
                    <td>{{ item.hintUsed }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { useScore } from "@/api/score";
export default {
    data: () => ({
       result:[],
       time: Date.now()
    }),
    methods: {
        formatTime(timestampArray) {
            const [year, month, day, hour, minute, second, milliseconds] = timestampArray;
            const date = new Date(year, month - 1, day, hour, minute, second, milliseconds);
            
            const dayFormatted = String(date.getDate()).padStart(2, '0');
            const monthFormatted = String(date.getMonth() + 1).padStart(2, '0');
            const yearFormatted = String(date.getFullYear()).slice(-2);
            const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
            
            const formattedTime = `${hours}:${minutes} ${ampm}`;
            return `${dayFormatted}-${monthFormatted}-${yearFormatted} ${formattedTime}`;
        },
        generateAvatarURL(teamName) {
            return `https://api.dicebear.com/6.x/notionists-neutral/svg?seed=${teamName}`;
        },
        getResultMethod(){
            const {getResult} = useScore(); 
            getResult()
            .then((res)=>{
                this.result = res.data;
                console.log(this.result.teams);
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    created(){
        this.getResultMethod();
    }
}
</script>
<style lang="stylus" scoped>
.content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  
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