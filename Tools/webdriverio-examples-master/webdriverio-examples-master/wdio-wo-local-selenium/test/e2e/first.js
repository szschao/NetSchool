'use strict'
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    const title = browser.url('https://www.baidu.com/').getTitle()
    assert.equal(title, '百度一下，你就知道')
  })
})
