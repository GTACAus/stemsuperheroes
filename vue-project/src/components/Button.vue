<script setup>
// Any other attribute or listener (type, disabled, aria-*, class, @click...) is
// passed straight to the <button> by Vue's attribute fallthrough.
defineProps({
    content: String
});
</script>

<template>
    <button><slot>{{ content }}</slot></button>
</template>

<style scoped>
button {
    --padding: 12px 20px;
    --background: var(--green);
    --color: white;
    --border: 2px solid var(--charcoal);
    --border-radius: var(--radius-small);
    --box-shadow: var(--shadow-small);
    --font-weight: 700;
    
    --background-hover: var(--purple);
    --translate-amount-hover: -2px;
    --box-shadow-hover: var(--shadow-medium);

    --background-active: var(--mint);
    --translate-amount-active: 3px;
    --box-shadow-active: none;

    padding: var(--padding);

    background: var(--background);
    color: var(--color);

    border: var(--border);
    border-radius: var(--border-radius);

    box-shadow: var(--box-shadow);

    font-weight: var(--font-weight);
    text-decoration: none;

    cursor: pointer;

    animation: pop-fade-in 0.5s ease;

    transition:
        transform 0.15s ease,
        box-shadow 0.15s ease,
        background 0.15s ease;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: var(--shadow-small);
}

button:hover {
    background: var(--background-hover);

    transform: translateY(var(--translate-amount-hover));

    box-shadow: var(--box-shadow-hover);
}

button:active,
button[aria-checked="true"],
button.selected {
    background: var(--background-active);
    transform: translateY(var(--translate-amount-active));
    box-shadow: var(--box-shadow-active);
}

</style>