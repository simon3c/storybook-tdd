// Adding your TDDButton component
import TDDButton from '../src/components/TDDButton.vue'

// Adding your TDDButton component to your Storybook sandbox
export default {
    title: 'TDDButton',
    component: TDDButton
}

// Adding a Default style'd component to your Storybook sandbox's TDDButton
export const Default = () => ({
    components: { TDDButton },
    template: '<TDDButton />'
})