<template>
  <section id="hero" class="hero">
    <div class="hero-inner">
      <!-- Terminal window -->
      <div class="terminal-window">
        <div class="term-bar">
          <div class="dots">
            <span class="dot red" />
            <span class="dot yellow" />
            <span class="dot green" />
          </div>
          <span class="term-title">bash — norvey@portfolio:~</span>
        </div>

        <div class="term-body">
          <!-- Lines that type in sequence -->
          <div v-for="(line, i) in visibleLines" :key="i" class="term-line">
            <template v-if="line.type === 'prompt'">
              <span class="user">norvey</span><span class="at-sign">@</span><span class="host">portfolio</span><span class="sep">:</span><span class="path">~</span><span class="dollar">$</span>
              <span class="cmd">{{ line.text }}</span>
            </template>
            <template v-else-if="line.type === 'output'">
              <span :class="line.class || 'out'">{{ line.text }}</span>
            </template>
            <template v-else-if="line.type === 'blank'">
              <br />
            </template>
          </div>

          <!-- Current typing line -->
          <div v-if="currentLine" class="term-line">
            <template v-if="currentLine.type === 'prompt'">
              <span class="user">norvey</span><span class="at-sign">@</span><span class="host">portfolio</span><span class="sep">:</span><span class="path">~</span><span class="dollar">$</span>
              <span class="cmd">{{ displayText }}<span class="cursor" /></span>
            </template>
            <template v-else>
              <span :class="currentLine.class || 'out'">{{ displayText }}<span class="cursor" /></span>
            </template>
          </div>

          <!-- Idle cursor after all lines -->
          <div v-if="done" class="term-line">
            <span class="user">norvey</span><span class="at-sign">@</span><span class="host">portfolio</span><span class="sep">:</span><span class="path">~</span><span class="dollar">$</span>
            <span class="cursor" />
          </div>
        </div>
      </div>

      <!-- CTA buttons -->
      <div v-if="showCta" class="cta-row fade-in visible">
        <a href="#projects" class="btn btn-primary">ver_proyectos</a>
        <a href="https://github.com/norvey28" target="_blank" rel="noopener" class="btn btn-outline">github_profile</a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint">
      <span>scroll_down</span>
      <div class="arrow" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',

  data() {
    return {
      lines: [
        { type: 'prompt', text: 'whoami' },
        { type: 'output', text: 'Norvey Peña', class: 'out-name' },
        { type: 'blank' },
        { type: 'prompt', text: 'cat role.txt' },
        { type: 'output', text: '> Software Engineer', class: 'out-green' },
        { type: 'output', text: '> FONDO ACCION · Bogotá DC, Colombia', class: 'out-dim' },
        { type: 'blank' },
        { type: 'prompt', text: 'cat skills.txt' },
        { type: 'output', text: '> Java · Spring Boot · Vue.js · Python · Node.js', class: 'out-cyan' },
        { type: 'blank' },
        { type: 'prompt', text: 'echo $PASSION' },
        { type: 'output', text: 'Clean code · Scalable architectures · Continuous learning', class: 'out-orange' },
      ],
      visibleLines: [],
      currentLine: null,
      displayText: '',
      done: false,
      showCta: false,
      lineIndex: 0,
      charIndex: 0,
    }
  },

  mounted() {
    setTimeout(() => this.nextLine(), 400)
  },

  methods: {
    nextLine() {
      if (this.lineIndex >= this.lines.length) {
        this.done = true
        this.showCta = true
        return
      }

      const line = this.lines[this.lineIndex]

      if (line.type === 'blank') {
        this.visibleLines.push(line)
        this.lineIndex++
        setTimeout(() => this.nextLine(), 80)
        return
      }

      this.currentLine = line
      this.displayText = ''
      this.charIndex = 0
      this.typeLine()
    },

    typeLine() {
      const text  = this.currentLine.text
      const speed = this.currentLine.type === 'prompt' ? 55 : 18

      if (this.charIndex < text.length) {
        this.displayText += text[this.charIndex]
        this.charIndex++
        setTimeout(() => this.typeLine(), speed)
      } else {
        // Line done
        this.visibleLines.push({ ...this.currentLine, text: this.displayText })
        this.currentLine = null
        this.displayText = ''
        this.lineIndex++
        const pause = this.lines[this.lineIndex - 1].type === 'prompt' ? 300 : 80
        setTimeout(() => this.nextLine(), pause)
      }
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 24px 60px;
  z-index: 1;
}

.hero-inner {
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Terminal window */
.terminal-window {
  background: rgba(13, 17, 23, 0.88);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 40px rgba(0, 255, 65, 0.08), 0 20px 60px rgba(0,0,0,0.5);
}

.term-bar {
  background: #1a2233;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--border);
}

.dots { display: flex; gap: 7px; }
.dot  { width: 12px; height: 12px; border-radius: 50%; }
.dot.red    { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green  { background: #28c840; }

.term-title {
  font-size: 0.7rem;
  color: var(--gray);
  flex: 1;
  text-align: center;
}

.term-body {
  padding: 24px 20px;
  min-height: 240px;
  font-size: 0.88rem;
  line-height: 1.9;
}

.term-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
}

.user   { color: #5af78e; font-weight: 600; }
.at-sign { color: var(--white); }
.host   { color: var(--cyan); font-weight: 600; }
.sep    { color: var(--white); }
.path   { color: var(--orange); font-weight: 600; }
.dollar { color: var(--green); margin: 0 8px 0 2px; }
.cmd    { color: var(--white); }

.out      { color: var(--white); padding-left: 4px; }
.out-name { color: var(--green); font-weight: 700; font-size: 1.3rem; padding-left: 4px; text-shadow: 0 0 12px var(--green-glow); }
.out-green  { color: var(--green); padding-left: 4px; }
.out-dim    { color: var(--gray);  padding-left: 4px; }
.out-cyan   { color: var(--cyan);  padding-left: 4px; }
.out-orange { color: var(--orange); padding-left: 4px; }

/* CTA buttons */
.cta-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
  letter-spacing: 0.03em;
}

.btn::before { content: '$ '; opacity: 0.6; }

.btn-primary {
  background: var(--green);
  color: var(--bg);
  border: 1px solid var(--green);
  font-weight: 700;
}
.btn-primary:hover {
  background: transparent;
  color: var(--green);
  box-shadow: 0 0 18px var(--green-glow);
  text-shadow: none;
}

.btn-outline {
  background: transparent;
  color: var(--green);
  border: 1px solid var(--green);
}
.btn-outline:hover {
  background: var(--green);
  color: var(--bg);
  box-shadow: 0 0 18px var(--green-glow);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--gray);
  font-size: 0.65rem;
  animation: float 2.5s ease-in-out infinite;
}

.arrow {
  width: 10px; height: 10px;
  border-right: 2px solid var(--green);
  border-bottom: 2px solid var(--green);
  transform: rotate(45deg);
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}
</style>
