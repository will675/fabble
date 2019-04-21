import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloFabble from '@/components/HelloFabble.vue'

describe('HelloFabble.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloFabble, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
