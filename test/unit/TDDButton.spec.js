import { shallowMount } from '@vue/test-utils'
import TDDButton from '../../src/components/TDDButton.vue'

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
    wrapper = shallowMount(TDDButton)
})

// Destroy the component wrapper after each test
afterEach(() => {
    wrapper.destory()
})

describe('TDDButton', () => {
    
    // Checking if the component's name is 'TDDButton'
    it('Named TDDButton', () => {
        expect(wrapper.name()).toBe('TDDButton')
    })
})