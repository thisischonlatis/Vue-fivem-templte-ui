<template>
    <span>{{ displayValue.toLocaleString() }}</span>
</template>


<script>
import gsap from 'gsap';
export default {
    name: "animatedinteger",
    props: { value: { default: 0 } },

    data() {
        return {
            displayValue: this.value,
            tweenValue: this.value
        };
    },

    watch: {
        value() {
            gsap.to(this, {
                tweenValue: this.value,
                onUpdate: () => {
                    this.displayValue = Math.ceil(this.tweenValue);
                }
            });
        }
    }
};
</script>
