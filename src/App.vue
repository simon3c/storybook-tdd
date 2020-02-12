<template>
    <div>
        <input
            v-model="message"
            type="text"
        />
        <h2>{{ message }}</h2>
        <h3>Static message</h3>
        <TDDButton label="Welcome" type="primary" />
    </div>
</template>

<script>
import TDDButton from './components/TDDButton.vue'
export default {
    components: {TDDButton},
    data() {
        return {
            message: 'This is a dynamic message.'
        }
    }
}
</script>