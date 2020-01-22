<template>
    <div>
        <input
            v-model="message"
            type="text"
        />
        <h2>{{ message }}</h2>
        <h3>Static message</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'This is a dynamic message.'
        }
    }
}
</script>