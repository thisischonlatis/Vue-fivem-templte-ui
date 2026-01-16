<template>
    <Main />
    <Box />
</template>

<script>
import Box from './views/box.vue';
import Main from './views/Main.vue';

export default {
    name: "App",
    components: {
        Main,
        Box,
    },
};
</script>