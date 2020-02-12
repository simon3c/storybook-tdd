import { shallowMount } from '@vue/test-utils'
import TDDButton from '@/components/TDDButton.vue'

describe('TDDButton', () => {
    // Now mount the component and you have the wrapper
    const wrapper = shallowMount(TDDButton)

    // Checking if the component's name is 'TDDButton'
    it('Named TDDButton', () => {
        expect(wrapper.name()).toBe('TDDButton')
    })

    // Checking if the component contains a 'button' element
    it('Contains a button element', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    // Checking if the component renders the label on the button 'element'
    it('Renders button text using a label prop', () => {
        wrapper.setProps({ label: 'hello' })
        expect(wrapper.vm.label).toBe('hello')
    })

    // Checking if the component has the default 'TDDButton' class
    it('Has default button styles', () => {
        expect(wrapper.classes('TDDButton')).toBe(true)
    })

    // Checking if the component has the primary class when 'primary'
    // is the value of the 'type' prop
    // it('Has primary styles', () => {
    //     wrapper.setProps({ type: 'primary' })
    //     expect(wrapper.classes('primary')).toBe('primary')
    // })

    // Checking if a 'click' event is emitted when the component is clicked
    it('Emits a click event when clicked', () => {
        wrapper.trigger('click');
        expect (wrapper.emitted('click')).toBeTruthy()
    })
})