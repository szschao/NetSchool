'use strict'
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of page one', () => {
    const title = browser.url('http://localhost:3000/test/fixture/one.html').getTitle()
    assert.equal(title, 'One')
  })
})
