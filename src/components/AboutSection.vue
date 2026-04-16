<template>
  <section id="about" class="section">
    <h2 class="section-title">sobre_mi</h2>

    <div class="about-grid">
      <!-- Avatar card -->
      <div class="avatar-card terminal-card fade-in">
        <div class="card-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="card-title">profile.json</span>
        </div>
        <div class="card-body avatar-body">
          <div class="avatar-wrap">
            <img :src="store.profile.avatar" :alt="store.profile.name" class="avatar-img" />
            <div class="avatar-ring" />
          </div>
          <div class="profile-meta">
            <p class="meta-line"><span class="key">name</span>: <span class="val-str">"{{ store.profile.name }}"</span></p>
            <p class="meta-line"><span class="key">role</span>: <span class="val-str">"{{ store.profile.role }}"</span></p>
            <p class="meta-line"><span class="key">company</span>: <span class="val-str">"{{ store.profile.company }}"</span></p>
            <p class="meta-line"><span class="key">location</span>: <span class="val-str">"{{ store.profile.location }}"</span></p>
            <p class="meta-line">
              <span class="key">github</span>:
              <a :href="store.profile.github" target="_blank" rel="noopener" class="val-link">"{{ store.profile.github }}"</a>
            </p>
            <p class="meta-line"><span class="key">status</span>: <span class="val-bool">true</span> <span class="comment">// open to opportunities</span></p>
          </div>
        </div>
      </div>

      <!-- Bio card -->
      <div class="bio-card terminal-card fade-in">
        <div class="card-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="card-title">README.md</span>
        </div>
        <div class="card-body">
          <div class="prompt-line">
            <span class="user">norvey</span><span class="sep">@</span><span class="host">portfolio</span><span class="colon">:</span><span class="path">~/about</span><span class="dollar">$</span>
            <span>cat README.md</span>
          </div>

          <p class="bio-text">{{ store.profile.bio }}</p>

          <div class="bio-list">
            <div class="bio-item">
              <span class="bi-icon">▸</span>
              <span>Desarrollo de <strong>APIs RESTful</strong> y microservicios con Java & Spring Boot</span>
            </div>
            <div class="bio-item">
              <span class="bi-icon">▸</span>
              <span>Construcción de interfaces modernas con <strong>Vue.js</strong></span>
            </div>
            <div class="bio-item">
              <span class="bi-icon">▸</span>
              <span>Resolución de problemas complejos con <strong>algoritmos de IA</strong></span>
            </div>
            <div class="bio-item">
              <span class="bi-icon">▸</span>
              <span>Aprendizaje continuo — actualmente explorando <strong>arquitecturas cloud</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolio'

export default {
  name: 'AboutSection',

  data() {
    return { store: usePortfolioStore() }
  },

  mounted() {
    this.observeFadeIns()
  },

  methods: {
    observeFadeIns() {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.15 }
      )
      this.$el.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    },
  },
}
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;
  align-items: start;
}

/* Avatar */
.avatar-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.avatar-wrap {
  position: relative;
  width: 140px;
  height: 140px;
}

.avatar-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid var(--green);
  filter: grayscale(20%);
  display: block;
}

.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px dashed var(--green-dim);
  animation: spin 12s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.profile-meta {
  width: 100%;
  font-size: 0.78rem;
  line-height: 2;
}

.meta-line  { display: flex; flex-wrap: wrap; gap: 4px; }
.key        { color: var(--cyan); }
.val-str    { color: var(--orange); }
.val-bool   { color: #ff7b72; }
.val-link   { color: var(--orange); word-break: break-all; }
.comment    { color: var(--gray); font-size: 0.7rem; }

/* Bio */
.prompt-line {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.user   { color: #5af78e; }
.sep    { color: var(--white); }
.host   { color: var(--cyan); }
.colon  { color: var(--white); }
.path   { color: var(--orange); }
.dollar { color: var(--green); margin: 0 8px 0 2px; }

.bio-text {
  font-size: 0.85rem;
  line-height: 1.8;
  color: var(--white);
  margin-bottom: 24px;
  border-left: 2px solid var(--green);
  padding-left: 14px;
}

.bio-list { display: flex; flex-direction: column; gap: 10px; }

.bio-item {
  display: flex;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--gray);
  line-height: 1.5;
}

.bi-icon { color: var(--green); flex-shrink: 0; }
.bio-item strong { color: var(--white); }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
}
</style>
