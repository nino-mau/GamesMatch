<script setup>
// **** IMPORTS ****
import { onMounted, ref } from 'vue';

// *** Import Illustrations Svg ***
import IlluLandingPage1 from '@/components/illustrations/IlluLandingPage1.vue';

// *** Import Icons ***
import IconPlay from '@/components/icons/IconPlay.vue';

// *** Import PrimeVue Components ***
import Button from 'primevue/button';

// *** Import Framework ***
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// *** Import Functions ***
import { animateElementOnScroll } from '@/utils/general';

// **** LOGIC ****

// *** Select dom element using refs ***
const title = ref(null);
const para = ref(null);
const buttons = ref(null);
const illuSection = ref(null);

onMounted(() => {
   // *** Trigger css animations from animate.css on scroll ***
   animateElementOnScroll(title, 'animate__bounceInLeft', 2, 0.2);
   animateElementOnScroll(para, 'animate__bounceInLeft', 2, 0.5);
   animateElementOnScroll(buttons, 'animate__bounceInUp', 2, 0.8);
   animateElementOnScroll(illuSection, 'animate__fadeInUpBig', 2, 1.2);
});
</script>

<template>
   <div class="lp1-container overflow-hidden">
      <div class="headline-container">
         <h1 ref="title" class="title invisible text-5xl/[1.6] font-bold">
            <span class="hover-effect-text-underline-marker relative">Discover</span> &
            <span class="text-span text-primary">Challenge</span><br />
            Yourself or Your<br />
            Friends !
         </h1>
         <p ref="para" class="paragraph invisible text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br />
            do eiusmod tempor incididunt.
         </p>
         <div ref="buttons" class="button-container invisible">
            <Button class="button1" raised>
               <span class="text">Discover</span>
               <span class="icon"><IconPlay svg-width="34" svg-color="#5250A4" /></span>
            </Button>
            <Button class="button2" label="Learn more" variant="outlined" raised />
         </div>
      </div>

      <div class="invisible" ref="illuSection">
         <IlluLandingPage1 svg-width="500" svg-class="drop-shadow-3xl" />
      </div>
   </div>
</template>

<style scoped>
.lp1-container {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5rem;
   height: 93.4vh;
   padding-bottom: 6.6vh;
   /* LP = landing page */
   /* -- Contains the title and buttons of this section of the landing page -- */
   > .headline-container {
      > .paragraph {
         margin-top: 2rem;
      }
      > .button-container {
         > .button1 {
            font-size: 1rem;
            font-weight: var(--p-button-label-font-weight);
            width: 240px;
            height: 55px;
            color: var(--secondary-color);
            overflow: hidden;
         }
         /* -- Handle Hover Effect Btn1 -- */
         > .button1 .text,
         .button1 .icon {
            position: relative;
            transition: transform 0.3s; /* Smooth transition for animations */
         }
         > .button1 .text {
            transform: translateY(0);
            line-height: 50px; /* Vertically center the text */
         }
         > .button1 .icon {
            transform: translateY(-120%);
            position: absolute;
            line-height: 10px; /* Vertically center the icon */
         }
         > .button1:hover .text {
            transform: translateY(300%);
         }
         > .button1:hover .icon {
            transform: translateY(0);
         }
         > .button2 {
            font-size: 1rem;
            width: 180px;
            height: 55px;
            margin-left: 1rem;
            border-width: 2px;
         }
         > .button2:hover {
            color: var(--secondary-color);
         }
         > .button1,
         .button2 {
            margin-top: 1.5rem;
         }
      }
   }
}
</style>
