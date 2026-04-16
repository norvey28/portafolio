<template>
  <section id="projects" class="section">
    <h2 class="section-title">proyectos</h2>

    <div class="projects-grid">
      <a
        v-for="project in store.projects"
        :key="project.id"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="project-card terminal-card fade-in"
      >
        <div class="card-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="card-title">{{ project.name.toLowerCase().replace(/\s+/g, '_') }}.git</span>
        </div>

        <div class="card-body proj-body">
          <div class="proj-top">
            <div class="folder-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
              </svg>
            </div>
            <div class="proj-links">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
          </div>

          <h3 class="proj-name">{{ project.name }}</h3>
          <p class="proj-desc">{{ project.description }}</p>

          <div class="proj-footer">
            <span class="lang-dot" :style="{ background: project.color }" />
            <span class="lang-name">{{ project.language }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolio'

export default {
  name: 'ProjectsSection',

  data() {
    return { store: usePortfolioStore() }
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    this.$el.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
  },
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.proj-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 160px;
}

.proj-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.folder-icon { color: var(--green); }
.proj-links  { color: var(--gray); transition: color 0.2s; }
.project-card:hover .proj-links { color: var(--green); }

.proj-name {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  color: var(--white);
  font-weight: 600;
}

.proj-desc {
  font-size: 0.78rem;
  color: var(--gray);
  line-height: 1.7;
  flex: 1;
}

.proj-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
}

.lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.lang-name {
  font-size: 0.72rem;
  color: var(--gray);
}

/* Stagger fade-in delays */
.fade-in:nth-child(1) { transition-delay: 0.05s; }
.fade-in:nth-child(2) { transition-delay: 0.10s; }
.fade-in:nth-child(3) { transition-delay: 0.15s; }
.fade-in:nth-child(4) { transition-delay: 0.20s; }
.fade-in:nth-child(5) { transition-delay: 0.25s; }
.fade-in:nth-child(6) { transition-delay: 0.30s; }
</style>
