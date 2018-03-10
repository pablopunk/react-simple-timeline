/* global test, expect */
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
/* eslint no-unused-vars: "off" */
import M from '..'

const stories = require('./stories.json')

configure({ adapter: new Adapter() })

const wrapper = shallow(<M stories={stories} />)

const testContentKeys = ['title', 'subtitle', 'date']

test('Renders as many items as I send', () => {
  expect(wrapper.find('.story')).toHaveLength(stories.length)
})

/* eslint guard-for-in: "off" */
for (const key of testContentKeys) {
  test(`Renders ${key}s`, () => {
    for (const i in stories) {
      expect(
        wrapper
          .find(`.story-${key}`)
          .at(i)
          .text()
      ).toBe(stories[i][key])
    }
  })
}

test('Renders links with href', () => {
  for (const i in stories) {
    expect(
      wrapper
        .find('.story-link')
        .at(i)
        .prop('href')
    ).toBe(stories[i].link)
  }
})

test('Renders link as <a> wrapping title', () => {
  expect(
    wrapper
      .find('.story-title')
      .at(0)
      .parent()
      .is('.story-link')
  ).toEqual(true)
})

test('Renders image with src and alt', () => {
  for (const i in stories) {
    expect(
      wrapper
        .find('.story-image')
        .at(i)
        .prop('src')
    ).toBe(stories[i].image)

    expect(
      wrapper
        .find('.story-image')
        .at(i)
        .prop('alt')
    ).toBe(stories[i].title)
  }
})

test('Does not render image if it\'s null', () => {
  const storyWithoutImage = {
    title: '',
    subtitle: '',
    link: '',
    date: ''
  }
  const component = shallow(<M stories={[ storyWithoutImage ]} />)
  expect(component.find('.story-image')).toHaveLength(0)
})

test('Renders faded component', () => {
  const component = shallow(<M stories={stories} fade />)
  expect(component.find('.story-fade')).toHaveLength(1)
})

test('Does not render faded component', () => {
  const component = shallow(<M stories={stories} />)
  expect(component.find('.story-fade')).toHaveLength(0)
})
