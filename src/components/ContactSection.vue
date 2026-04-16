<template>
  <section id="contact" class="section">
    <h2 class="section-title">contacto</h2>

    <div class="contact-wrap">
      <!-- Terminal contact card -->
      <div class="terminal-card contact-card fade-in">
        <div class="card-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="card-title">contact.sh</span>
        </div>
        <div class="card-body">
          <div class="contact-prompt">
            <span class="user">norvey</span><span class="sep">@</span><span class="host">portfolio</span><span class="colon">:</span><span class="path">~/contact</span><span class="dollar">$</span>
            <span>./get_in_touch.sh</span>
          </div>

          <p class="contact-msg">
            ¿Tienes un proyecto interesante o quieres ponerte en contacto?<br />
            <span class="text-green">Estoy disponible</span> para oportunidades laborales y colaboraciones.
          </p>

          <div class="contact-links">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="contact-link"
            >
              <span class="link-icon" v-html="link.icon" />
              <span class="link-label">{{ link.label }}</span>
              <span class="link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Matrix pixel art decoration -->
      <div class="deco-panel fade-in">
        <div class="pixel-grid">
          <span
            v-for="n in 120"
            :key="n"
            class="pixel"
            :style="{
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }"
          />
        </div>
        <div class="deco-text">
          <p class="deco-cmd">$ echo $STATUS</p>
          <p class="deco-output">available_for_work=true</p>
          <p class="deco-cmd">$ echo $LOCATION</p>
          <p class="deco-output">Bogotá DC, Colombia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',

  data() {
    return {
      contactLinks: [
        {
          label: 'github.com/norvey28',
          href: 'https://github.com/norvey28',
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
        },
        {
          label: 'linkedin',
          href: 'https://www.linkedin.com/in/norvey-pe%C3%B1a/',
          icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        },
      ],
    }
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    this.$el.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
  },
}
</script>

<style scoped>
.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.contact-card { height: 100%; }

.contact-prompt {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.user   { color: #5af78e; }
.sep    { color: var(--white); }
.host   { color: var(--cyan); }
.colon  { color: var(--white); }
.path   { color: var(--orange); }
.dollar { color: var(--green); margin: 0 8px 0 2px; }

.contact-msg {
  font-size: 0.84rem;
  line-height: 1.8;
  color: var(--gray);
  margin-bottom: 28px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(0, 255, 65, 0.04);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--white);
  text-decoration: none;
  font-size: 0.82rem;
  transition: all 0.25s;
}

.contact-link:hover {
  border-color: var(--green);
  background: rgba(0, 255, 65, 0.1);
  color: var(--green);
  box-shadow: 0 0 14px rgba(0, 255, 65, 0.1);
}

.link-icon { color: var(--green); display: flex; }
.link-label { flex: 1; }
.link-arrow { color: var(--green); transition: transform 0.2s; }
.contact-link:hover .link-arrow { transform: translateX(4px); }

/* Decoration panel */
.deco-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.pixel-grid {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  gap: 3px;
  padding: 20px;
  flex: 1;
}

.pixel {
  aspect-ratio: 1;
  background: var(--green);
  border-radius: 1px;
  opacity: 0.08;
  animation: pulse-pixel ease-in-out infinite;
}

@keyframes pulse-pixel {
  0%, 100% { opacity: 0.04; }
  50%       { opacity: 0.35; }
}

.deco-text {
  padding: 16px 20px;
  border-top: 1px solid var(--border);
  font-size: 0.78rem;
  line-height: 1.9;
}

.deco-cmd    { color: var(--gray); }
.deco-output { color: var(--green); }

@media (max-width: 768px) {
  .contact-wrap { grid-template-columns: 1fr; }
  .deco-panel   { display: none; }
}
</style>
