import * as React from 'react'
import { shallow } from 'enzyme'
import { Badge as BootstrapBadge } from 'react-bootstrap'
import { Badge } from '../src'

describe('Badge', () => {
  it('Badge renders itself without crashing', () => {
    const badgeWrapper = shallow(<Badge />)
    expect(badgeWrapper.find(BootstrapBadge)).toHaveLength(1)
  })

  it('Badge defaults color to primary', () => {
    const badgeWrapper = shallow(<Badge />)
    const bootstrapBadge = badgeWrapper.find(BootstrapBadge)
    expect(bootstrapBadge.props().variant).toEqual('primary')
  })

  it('Badge can change colors', () => {
    const badgeWrapper = shallow(<Badge color="secondary" />)
    const bootstrapBadge = badgeWrapper.find(BootstrapBadge)
    expect(bootstrapBadge.props().variant).toEqual('secondary')
  })

  it('Badge can redner children elements', () => {
    const badgeWrapper = shallow(<Badge>Hello World</Badge>)
    const bootstrapBadge = badgeWrapper.find(BootstrapBadge)
    expect(bootstrapBadge.text()).toEqual('Hello World')
  })
})
