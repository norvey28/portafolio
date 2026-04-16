<template>
  <section id="skills" class="section">
    <h2 class="section-title">skills</h2>

    <div class="skills-container">
      <div
        v-for="(group, i) in store.skills"
        :key="group.category"
        class="skill-group terminal-card fade-in"
        :style="{ transitionDelay: `${i * 0.08}s` }"
      >
        <div class="card-header">
          <span class="dot red" /><span class="dot yellow" /><span class="dot green" />
          <span class="card-title">{{ group.category.toLowerCase() }}.sh</span>
        </div>
        <div class="card-body">
          <div class="skill-prompt">
            <span class="dollar">$</span>
            <span class="cmd">ls {{ group.category.toLowerCase() }}/</span>
          </div>
          <div class="skill-tags">
            <span v-for="skill in group.items" :key="skill" class="tag skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress bars section -->
    <div class="progress-section fade-in">
      <div class="card-header-inline">
        <span class="dollar">$</span>
        <span class="cmd">htop --skills</span>
      </div>
      <div class="progress-list">
        <div v-for="item in progressItems" :key="item.name" class="prog-row">
          <span class="prog-name">{{ item.name }}</span>
          <div class="prog-bar-wrap">
            <div class="prog-bar" :style="{ width: item.visible ? item.level + '%' : '0%' }" :ref="el => barRefs[item.name] = el" />
          </div>
          <span class="prog-pct">{{ item.level }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolio'

export default {
  name: 'SkillsSection',

  data() {
    return {
      store: usePortfolioStore(),
      barRefs: {},
      progressItems: [
        { name: 'Java / Spring Boot', level: 85, visible: false },
        { name: 'Vue.js / JavaScript', level: 80, visible: false },
        { name: 'Python',              level: 70, visible: false },
        { name: 'SQL / Databases',     level: 75, visible: false },
        { name: 'Git / Linux',         level: 88, visible: false },
        { name: 'REST APIs',           level: 82, visible: false },
      ],
    }
  },

  mounted() {
    const fadeObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    this.$el.querySelectorAll('.fade-in').forEach((el) => fadeObs.observe(el))

    // Animate progress bars when in view
    const progObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            this.progressItems.forEach((item) => { item.visible = true })
            progObs.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    const progSection = this.$el.querySelector('.progress-section')
    if (progSection) progObs.observe(progSection)
  },
}
</script>

<style scoped>
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.skill-prompt {
  display: flex;
  gap: 8px;
  font-size: 0.78rem;
  margin-bottom: 14px;
  color: var(--gray);
}
.dollar { color: var(--green); }
.cmd    { color: var(--white); }

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag { cursor: default; }

/* Progress */
.progress-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
}

.card-header-inline {
  display: flex;
  gap: 8px;
  font-size: 0.8rem;
  margin-bottom: 20px;
  color: var(--white);
}

.progress-list { display: flex; flex-direction: column; gap: 14px; }

.prog-row {
  display: grid;
  grid-template-columns: 180px 1fr 48px;
  align-items: center;
  gap: 12px;
}

.prog-name { font-size: 0.78rem; color: var(--gray); }

.prog-bar-wrap {
  height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px;
  overflow: hidden;
}

.prog-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--green-dim), var(--green));
  border-radius: 3px;
  transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 8px var(--green-glow);
}

.prog-pct {
  font-size: 0.7rem;
  color: var(--green);
  text-align: right;
}

@media (max-width: 600px) {
  .prog-row { grid-template-columns: 130px 1fr 40px; }
}
</style>
