import { defineStore} from "pinia";

import { watch } from "vue";
import { useRouter } from "vue-router";

export const useLevelStore = defineStore('level', {
    state: () => {
        return {
            level: null,
            nextURI: '/otp',
            hint: 0,
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
        setnextURI(nextURI) {
            this.nextURI = nextURI;
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