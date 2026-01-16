import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
    state: () => ({
        main_visible: true,
        box_visible: true,
    }),

    actions: {
        show() {
            this.main_visible = true;
        },

        hide() {
            this.main_visible = false;
        },

        setVariable(name, data) {
            this[name] = data
        }
    },
});
