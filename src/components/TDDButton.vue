<template>
    <button
        class="TDDButton"
        :class="type"
        @click="$emit('click')"
    >
    {{ label }}
    </button>
</template>

// Adding a name to the TDDButton component
<script>
export default {
    name: 'TDDButton',
    props: ['label', 'type']
}
</script>

// Adding the default styles to the 'TDDButton' class
<style scoped>
.TDDButton {
    all: unset;
    font-family: sans-serif;
    padding: .5rem 1rem;
    border-radius: .25rem;
    cursor: pointer;
    background: lightgray;
}

.primary {
    background: deeppink;
    color: white;
}
</style>