<template>
    <Transition>
        <div class="main-container" v-if="global.main_visible"> <!-- from global store -->
            <p>Main container</p>
            <p>{{ text }}</p>
            <br>
            <p class="scope-style" v-for="(item, index) in filteredItems" :key="index">{{ item }}</p>

            <Transition>
                <div class="box" v-if="showBox">
                    <h1>Counter: <Animatedinteger :value="count" /> </h1>

                    <h2>Box display from local state</h2>
                    <p>Press "ESC" to hide this box</p>

                    <button @click="SendLua()">Send to LUA</button>

                    <img src="" @error="ErroImage">
                </div>
            </Transition>

        </div>
    </Transition>
</template>

<script>
import Animatedinteger from '@/components/animatedinteger.vue';
import { useGlobalStore } from '@/stores/global.store';

export default {
    name: "Main",
    components: {
        Animatedinteger,
    },
    data() {
        return {
            global: useGlobalStore(), // if use other component, useGlobalStore() must be called inside setup or data function
            dev_debug: true,

            showBox: true,
            text: "Hello text",

            items: [
                "apple",
                "banana",
                "orange",
                "hi",
                "eiei",
            ],
            count: 0,
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => item.includes("a"));
        },
    },
    mounted() {
        // Listen for keyup event
        window.addEventListener('keyup', this.onKeyup);

        // Listen for messages from NUI
        window.addEventListener("message", this.onMessage);

        if (this.dev_debug) {
            // Example of local state change
            setInterval(() => {
                this.count += Math.floor(Math.random() * 10) + 1;
            }, 1000);
        }
    },
    methods: {
        SendLua() {
            this.SendHttp('RECIVE_DATA', { exampleData: 'some data from vue' })
            /* 
                in lua

                RegisterNUICallback('RECIVE_DATA', function(data, cb)
                    print('Data from NUI:', data.exampleData)
                    cb('ok')
                end)
            */

            // this.SendHttp('RECIVE_DATA', { exampleData: 'some data from vue' }, 'my_resource_name' )
        },
        async onMessage(event) {
            var data = event.data;
            const actionname = data.action;
            switch (actionname) {
                case "DISPLAY":
                    this.global.main_visible = data.show;
                    this.text = data.text;

                    /* 
                        from lua

                        SendNUIMessage({
                            action = "DISPLAY",
                            show = true/false,
                            text = "some text",
                        })
                    */

                    break;
            }
        },
        async onKeyup(event) {

            // ESC key
            if (event.keyCode == 27 && this.showBox) {
                this.showBox = false;
                return
            }

            // E key
            if (event.keyCode == 69) {
                this.global.box_visible = !this.global.box_visible;
                return
            }
        },
    },
};
</script>

<style scoped>
.scope-style {
    color: red;
}
</style>