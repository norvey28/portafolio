<template>
  <canvas ref="canvas" class="matrix-canvas" aria-hidden="true" />
</template>

<script>
export default {
  name: 'MatrixBackground',

  data() {
    return {
      animFrame: null,
      drops: [],
      fontSize: 14,
      chars: 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}()[]$#@!?/\\|=+-*%^&~'.split(''),
    }
  },

  mounted() {
    this.init()
    window.addEventListener('resize', this.onResize)
  },

  beforeUnmount() {
    cancelAnimationFrame(this.animFrame)
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    init() {
      const canvas = this.$refs.canvas
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight

      const cols = Math.floor(canvas.width / this.fontSize)
      this.drops = Array.from({ length: cols }, () => Math.random() * -100)
      this.draw()
    },

    draw() {
      const canvas = this.$refs.canvas
      const ctx    = canvas.getContext('2d')

      // Semi-transparent black overlay → trails
      ctx.fillStyle = 'rgba(13, 2, 8, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cols = Math.floor(canvas.width / this.fontSize)

      for (let i = 0; i < cols; i++) {
        const char = this.chars[Math.floor(Math.random() * this.chars.length)]
        const x = i * this.fontSize
        const y = this.drops[i] * this.fontSize

        // Head of the drop — bright white-green
        const isHead = this.drops[i] > 1 && Math.random() > 0.9
        ctx.fillStyle = isHead ? '#aaffcc' : '#00ff41'
        ctx.font = `${this.fontSize}px JetBrains Mono, monospace`
        ctx.fillText(char, x, y)

        // Reset when off-screen with random delay
        if (y > canvas.height && Math.random() > 0.975) {
          this.drops[i] = 0
        }
        this.drops[i] += 0.2
      }

      this.animFrame = requestAnimationFrame(this.draw)
    },

    onResize() {
      cancelAnimationFrame(this.animFrame)
      this.init()
    },
  },
}
</script>

<style scoped>
.matrix-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  opacity: 0.18;
  pointer-events: none;
}
</style>
