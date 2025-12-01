<script setup>
// import useImages from '../composables'
const { getImages } = useImages();
const links = getImages();

const amount = ref(links.length)
const animationTime = ref(`${amount.value * 10}s`);
const offset = ref(`${(amount.value - 1) * 4}px`);
const width = ref('1000px');
// console.log(offset,width)
</script>
<template>
    <div class="slider">
        <div class="slide-track">
            <div class="slide mr-2 ml-2" v-for="image in links">
                <v-img :src="image" cover></v-img>
            </div>
            <div class="slide mr-2 ml-2" v-for="image in links">
                <v-img :src="image" cover></v-img>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-1* v-bind(amount) * v-bind(width) + v-bind(offset)))
    }
}

.slider {
    height: 600px;
    overflow: hidden;
    // position: relative;
    // width: calc(v-bind(width) * v-bind(amount));
    width: 95vw;
}

.slide-track {
    animation: scroll v-bind(animationTime) linear infinite;
    display: flex;
    width: calc(2 * v-bind(width) * v-bind(amount) + 2 * v-bind(offset));
}

.slide {
    // height: 100px;
    width: v-bind(width);
    background-color: black;
}
</style>