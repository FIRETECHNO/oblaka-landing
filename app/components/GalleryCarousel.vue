<script setup>
import { computed, ref } from 'vue';

let images = ref([
    { src: "/images/1.png", width: 1280, height: 1280 },
    { src: "/images/reception.png", width: 1854, height: 542 },
    { src: "/images/3.png", width: 1080, height: 1080 },
    { src: "/images/reception.png", width: 1854, height: 542 },
    { src: "/images/2.png", width: 1280, height: 1280 },
    { src: "/images/reception.png", width: 1854, height: 542 },
    { src: "/images/4.png", width: 1280, height: 1280 },
    { src: "/images/1.png", width: 1280, height: 1280 },
])
let height = ref(500);
let scrollInterval = ref(10000)


const scrollContainer = ref(null);
const timer = ref(null);

const rowHeight = computed(() => parseInt(height.value, 10));

const processedImages = computed(() => {
    return images.value.map((img) => {
        const w = img.width || 1;
        const h = img.height || 1;
        const aspectRatio = w / h;
        return {
            ...img,
            calculatedWidth: Math.floor(rowHeight.value * aspectRatio),
        };
    });
});

const autoScroll = () => {
    const scroll = scrollContainer.value;
    if (!scroll) return;

    const stepSlice = processedImages.value.slice(0, 3);
    const scrollStep = stepSlice.reduce((acc, img) => acc + img.calculatedWidth, 0) + (16 * 3); // + gaps

    const isAtEnd = scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 10;

    if (isAtEnd) {
        scroll.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        scroll.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
};

onMounted(() => {
    timer.value = setInterval(autoScroll, scrollInterval.value);
});

onUnmounted(() => {
    if (timer.value) clearInterval(timer.value);
});
</script>

<template>

    <div ref="scrollContainer" class="d-flex overflow-x-auto align-center" style="gap: 16px; user-sscrollect: none;">
        <v-card v-for="(image, i) in processedImages" :key="i" :height="rowHeight" :width="image.calculatedWidth"
            class="flex-shrink-0 rounded-lg" scrollevation="2">
            <v-img :src="image.src" :lazy-src="image.lazySrc || image.src" height="100%" width="100%" cover>
                <template v-slot:placeholder>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
                    </div>
                </template>
            </v-img>
        </v-card>
    </div>

</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>