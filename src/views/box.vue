<template>
    <!-- global.box_visible is action from main.vue -->
    <div class="box-global" v-if="global.box_visible"> <!-- from global store -->
        <p>Box container</p>
        <p>Press "E" to hide this box</p>
    </div>
</template>

<script>
import { useGlobalStore } from '@/stores/global.store';

export default {
    name: "Box",
    data() {
        return {
            global: useGlobalStore(), // if use other component, useGlobalStore() must be called inside setup or data function
            dev_debug: false,

        }
    },
    computed: {

    },
    mounted() {
        // Listen for keyup event
        window.addEventListener('keyup', this.onKeyup);

        // Listen for messages from NUI
        window.addEventListener("message", this.onMessage);
    },
    methods: {
        async onMessage(event) {
            var data = event.data;
            const actionname = data.action;
            switch (actionname) {
                case "DISPLAY_BOX":
                    this.global.box_visible = data.show;

                    /* 
                        from lua

                        SendNUIMessage({
                            action = "DISPLAY_BOX",
                            show = true/false,
                        })
                    */
                   
                    break;
            }
        },
    },
};
</script>