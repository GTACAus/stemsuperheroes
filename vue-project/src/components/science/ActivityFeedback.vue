<script setup>
// Render this only once there is feedback to show (v-if in the parent);
// `success` then picks which of the two messages and styles to use.
defineProps({
  success: Boolean,
  successFeedback: { type: String, required: true },
  tryAgainFeedback: { type: String, required: true },
});
</script>

<template>
  <div class="feedback" :class="success ? 'success' : 'try-again'" role="status">
    <!-- A slot replaces the default message, e.g. <ActivityFeedback ...>Custom text</ActivityFeedback> -->
    <slot>
      <strong>{{ success ? 'Great work!' : 'Try again.' }}</strong>
      {{ success ? successFeedback : tryAgainFeedback }}
    </slot>
  </div>
</template>

<style scoped>
.feedback {
  margin-top: 18px;
  padding: 14px 18px;

  background: var(--background-color);
  border: 2px solid var(--charcoal);
  border-top: 6px solid var(--accent-color);
  border-radius: var(--radius-small);

  line-height: 1.5;
  animation: pop-fade-in 0.5s ease;
}

.feedback.success {
  --accent-color: var(--green);
  --background-color: var(--soft-green);
}

.feedback.try-again {
  --accent-color: var(--orange);
  --background-color: var(--soft-orange);
}
</style>
