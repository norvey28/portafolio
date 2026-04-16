<template>
  <div id="app-root">
    <MatrixBackground />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import MatrixBackground  from '@/components/MatrixBackground.vue'
import NavBar            from '@/components/NavBar.vue'
import HeroSection       from '@/components/HeroSection.vue'
import AboutSection      from '@/components/AboutSection.vue'
import ProjectsSection   from '@/components/ProjectsSection.vue'
import SkillsSection     from '@/components/SkillsSection.vue'
import ContactSection    from '@/components/ContactSection.vue'
import FooterSection     from '@/components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    MatrixBackground,
    NavBar,
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    FooterSection,
  },
}
</script>

<style>
#app-root {
  position: relative;
  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
}
</style>
