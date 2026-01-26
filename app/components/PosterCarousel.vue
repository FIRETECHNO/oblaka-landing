<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const posterStore = usePoster()
// import useImages from '../composables'

let { posters } = posterStore;

const slider = useTemplateRef('slider')


const amount = computed(() => posters.value.length)
const animationTime = ref(`${amount.value * 10}s`);
const offset = ref(`${(amount.value - 1) * 4}px`);
const width = ref(smAndDown.value ? '280px' : '585px');
const height = ref(smAndDown.value ? '300px' : '598px');

function next() {
    slider.value.scrollBy(
        {
            left: smAndDown.value ? 280 * 3 : 585 * 3,
            behavior: 'smooth'
        }
    )
}

function prev() {
    slider.value.scrollBy(
        {
            left: smAndDown.value ? -280 * 3 : -585 * 3,
            behavior: 'smooth'
        }
    )
}

function goToPage(link) {
    if (link) {
        window.open(link, { target: "_blank" })
    }
}

watch(smAndDown, () => {
    width.value = smAndDown.value ? '280px' : '585px'
    height.value = smAndDown.value ? '300px' : '598px'
})


onMounted(async () => {
    await posterStore.getAllPosters()
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
    <div v-if="posters.length > 0" style="position: relative">
        <div class="slider" ref="slider">
            <div class="slide-track">
                <v-btn icon="mdi-arrow-left" class="back-button" @click="prev"></v-btn>

                <div class="slide mr-2 ml-2" v-for="(poster, index) in posters" :key="index"
                    @click="goToPage(poster.qticketsUrl)">
                    <v-img :src="poster.images[0]" :draggable="false" loading="lazy" height="100%" cover></v-img>
                </div>
                <div v-if="amount > 4" class="slide mr-2 ml-2" v-for="(poster, index) in posters" :key="index"
                    @click="goToPage(poster.qticketsUrl)">
                    <v-img :src="poster.images[0]" :draggable="false" loading="lazy" height="100%" cover></v-img>
                </div>

                <v-btn icon="mdi-arrow-right" class="next-button" @click="next"></v-btn>
            </div>
        </div>
    </div>
    <div v-else class="d-flex justify-center">
        Афиши скоро появятся
    </div>
</template>
<style scoped lang="scss">
.slider {
    // height: 598px;
    overflow-x: scroll;
    width: calc(v-bind(width) * v-bind(amount));
    width: 95vw;
    // position: relative;
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
    cursor: pointer;
}

.next-button {
    position: absolute;
    right: 10px;
    z-index: 1000;
}

.back-button {
    position: absolute;
    left: 10px;
    z-index: 1000;
}
</style>