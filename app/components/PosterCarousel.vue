<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

// import useImages from '../composables'

let links = ref([
    {
        images: ["/images/1.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
    },
    {
        images: ["/images/2.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
    },
    {
        images: ["/images/3.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
    },
    {
        images: ["/images/4.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
    },
    {
        images: ["/images/5.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
    },
    {
        images: ["/images/6.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
    },
    {
        images: ["/images/7.png"],
        eventDate: "09.08.2025",
        markdownText: "Lorem"
    },
    {
        images: ["/images/8.png"],
        eventDate: "09.08.2025",
        markdownText: "Ipsum"
    },
    {
        images: ["/images/9.png"],
        eventDate: "09.08.2025",
        markdownText: "Dolor"
    },
]);
const slider = useTemplateRef('slider')


const amount = ref(links.value.length)
const animationTime = ref(`${amount.value * 10}s`);
const offset = ref(`${(amount.value - 1) * 4}px`);
const width = ref(smAndDown.value ? '280px' : '585px');
const height = ref(smAndDown.value ? '300px' : '598px');
watch(smAndDown, () => {
    width.value = smAndDown.value ? '280px' : '585px'
    height.value = smAndDown.value ? '300px' : '598px'
})
onMounted(() => {
    setInterval(() => {
        slider.value.scrollBy(
            {
                left: 585 * 3,
                behavior: 'smooth'
            }
        )
    }, 10000)
})
// console.log(offset,width)
</script>
<template>
    <div class="slider" ref="slider">
        <div class="slide-track">
            <div class="slide mr-2 ml-2" v-for="image in links">
                <v-img :src="image.images[0]" :draggable="false" loading="lazy"></v-img>
            </div>
            <div class="slide mr-2 ml-2" v-for="image in links">
                <v-img :src="image.images[0]" :draggable="false" loading="lazy"></v-img>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.slider {
    // height: 598px;
    overflow-x: scroll;
    width: calc(v-bind(width) * v-bind(amount));
    width: 95vw;
}

::-webkit-scrollbar {
    display: none;
}

.slide-track {
    display: flex;
    height: 100%;
    align-items: center;
    width: calc(2 * v-bind(width) * v-bind(amount) + 2 * v-bind(offset));
}

.slide {
    height: v-bind(height);
    width: v-bind(width);
    background-color: black;
}
</style>