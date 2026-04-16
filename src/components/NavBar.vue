<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <!-- Logo / brand -->
      <a href="#hero" class="brand">
        <span class="brand-bracket">[</span>
        <span class="brand-name">norvey@portfolio</span>
        <span class="brand-bracket">]</span>
        <span class="cursor" />
      </a>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="(link, i) in store.navLinks" :key="link.href">
          <a :href="link.href" class="nav-link">
            <span class="link-index">{{ String(i + 1).padStart(2, '0') }}.</span>
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <ul v-if="menuOpen" class="mobile-menu">
        <li v-for="(link, i) in store.navLinks" :key="link.href">
          <a :href="link.href" class="nav-link" @click="menuOpen = false">
            <span class="link-index">{{ String(i + 1).padStart(2, '0') }}.</span>
            {{ link.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolio'

export default {
  name: 'NavBar',

  data() {
    return {
      isScrolled: false,
      menuOpen: false,
      store: usePortfolioStore(),
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 40
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(13, 2, 8, 0.85);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--font-pixel);
  font-size: 0.6rem;
  color: var(--green);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
  text-shadow: 0 0 10px var(--green-glow);
}

.brand-bracket { color: var(--orange); }
.brand-name    { color: var(--green); }

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-link {
  color: var(--white);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.link-index {
  font-size: 0.65rem;
  color: var(--orange);
}

.nav-link:hover { color: var(--green); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--green);
  transition: background 0.2s;
}
.hamburger:hover span { background: var(--white); }

.mobile-menu {
  list-style: none;
  background: rgba(13, 2, 8, 0.95);
  border-top: 1px solid var(--border);
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from,
.slide-down-leave-to     { opacity: 0; transform: translateY(-10px); }

@media (max-width: 680px) {
  .nav-links  { display: none; }
  .hamburger  { display: flex; }
}
</style>
