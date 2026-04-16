<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-prompt">
        <span class="user">norvey</span><span class="sep">@</span><span class="host">portfolio</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span>
        <span class="cmd">echo "Built with Vue.js + ♥ by Norvey Peña — {{ year }}"</span>
      </div>
      <p class="footer-output">Built with Vue.js + ♥ by Norvey Peña — {{ year }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    year() { return new Date().getFullYear() },
  },
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 24px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.footer-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 0.75rem;
  flex-wrap: wrap;
  color: var(--gray);
  margin-bottom: 6px;
}

.user   { color: #5af78e; }
.sep    { color: var(--white); }
.host   { color: var(--cyan); }
.colon  { color: var(--white); }
.path   { color: var(--orange); }
.dollar { color: var(--green); margin: 0 8px 0 2px; }
.cmd    { color: var(--gray); }

.footer-output {
  font-size: 0.72rem;
  color: var(--green);
  opacity: 0.7;
}
</style>
