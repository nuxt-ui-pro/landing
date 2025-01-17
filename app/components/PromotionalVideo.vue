<template>
  <div class="relative">
    <div class="border-gradient rounded-xl p-4">
      <div class="aspect-w-16 aspect-h-9 rounded-xl relative overflow-hidden border border-neutral-950 dark:border-white/10">
        <video
          data-v-baf90ddd=""
          preload="none"
          poster="https://res.cloudinary.com/nuxt/video/upload/so_3.3/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.jpg"
          :controls="true"
        ><source
          data-v-baf90ddd=""
          src="https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.webm"
          type="video/webm"
        ><source
          data-v-baf90ddd=""
          src="https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.mp4"
          type="video/mp4"
        ><source
          data-v-baf90ddd=""
          src="https://res.cloudinary.com/nuxt/video/upload/v1708511800/ui-pro/video-nuxt-ui-pro_kwfbdh.ogg"
          type="video/ogg"
        ></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-gradient:after {
  --angle: 0deg;
  --border-color: rgb(var(--ui-color-neutral-300));
  --highlight-color: rgb(var(--ui-color-primary-500));

  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -1px;
  opacity: 0.5;
  border-radius: 0.8rem;
  z-index: -1;
  background: var(--ui-border);

  @supports (background: paint(houdini)) {
    background: linear-gradient(var(--angle), var(--ui-border), var(--ui-border), var(--ui-border), var(--ui-border), var(--highlight-color));
    animation: 10s rotate linear infinite;
  }
}

.dark .border-gradient:after {
  --border-color: rgb(var(--ui-color-neutral-700));
  --highlight-color: rgb(var(--ui-color-neutral-400));
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
</style>
