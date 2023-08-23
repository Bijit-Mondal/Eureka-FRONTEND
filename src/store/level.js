import { defineStore} from "pinia";

import { watch } from "vue";
import { useRouter } from "vue-router";

export const useLevelStore = defineStore('level', {
    state: () => {
        return {
            level: -1,
            hintUsed: 0,
            score: null,
            nextURI: '/otp',
            allQuestion:null,
        };
    },
    persist: true,
    actions: {
        setLevel(level) {
            this.level = level;
        },
        leveUpgrade() {
            this.level++;
        },
        setHint(hintUsed) {
            this.hintUsed = hintUsed;
        },
        setnextURI(nextURI) {
            this.nextURI = nextURI;
        },
        hintUsing() {
            this.hintUsed++;
        },
        setScore() {
            this.score -= 5;
        }
    },
    setup() {
        const router = useRouter();

        // Watch for changes in `nextURI` and navigate to the new route
        watch(
            () => this.nextURI,
            (newURI) => {
                router.push(newURI);
            }
        );
    },

});