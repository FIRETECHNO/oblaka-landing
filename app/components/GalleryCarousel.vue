<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    variant: number
}>()
let images1 = [
    { src: "/images/10.webp", width: 2560, height: 1703 },
    { src: "/images/11.webp", width: 2560, height: 1703 },
    { src: "/images/12.webp", width: 2560, height: 1703 },
    { src: "/images/10.webp", width: 2560, height: 1703 },
    { src: "/images/11.webp", width: 2560, height: 1703 },
    { src: "/images/12.webp", width: 2560, height: 1703 },
]

let images2 = [
    { src: "/images/13.webp", width: 2560, height: 1703 },
    { src: "/images/14.webp", width: 2560, height: 1703 },
    { src: "/images/15.webp", width: 1703, height: 2560 },
    { src: "/images/16.webp", width: 1703, height: 2560 },
    { src: "/images/13.webp", width: 2560, height: 1703 },
    { src: "/images/14.webp", width: 2560, height: 1703 },
    { src: "/images/15.webp", width: 1703, height: 2560 },
    { src: "/images/16.webp", width: 1703, height: 2560 },
]
let images = ref(props.variant == 1 ? images1 : images2)
let height = ref(400);
let scrollInterval = ref(10000)


const scrollContainer = ref(null);
const timer: any = ref(null);

const processedImages = computed(() => {
    return images.value.map((img) => {
        const w = img.width || 1;
        const h = img.height || 1;
        const aspectRatio = w / h;
        return {
            ...img,
            calculatedWidth: Math.floor(height.value * aspectRatio),
        };
    });
});

const autoScroll = () => {
    const scroll: any = scrollContainer.value;
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

onMounted(async () => {
    timer.value = setInterval(autoScroll, scrollInterval.value);
    if (props.variant) {
        const scroll: any = scrollContainer.value;
        scroll.scrollTo({ left: 70, behavior: 'smooth' })
    }
});

onUnmounted(() => {
    if (timer.value) clearInterval(timer.value);
});
</script>

<template>

    <div ref="scrollContainer" class="d-flex overflow-x-auto align-center pt-4 pb-4" style="gap: 32px">
        <v-card v-for="(image, i) in processedImages" :key="i" :height="height" :width="image.calculatedWidth"
            class="flex-shrink-0 rounded-lg" scrollevation="2">
            <v-img :src="image.src" height="100%" width="100%" cover>
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