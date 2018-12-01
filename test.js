require('jsdom-global')()
const assert = require('assert')
const attr = require('./')

describe('Bianco attr', function() {
  it('export default contains all the module methods', function() {
    assert.deepEqual(Object.keys(attr.default), [
      'get',
      'set',
      'remove',
      'has'
    ])
  })

  it('it can set an attribute', function() {
    const div = document.createElement('div')
    attr.set(div, 'hidden', 'val')
    assert.equal(div.getAttribute('hidden'), 'val')
  })

  it('it can set an attribute on multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], 'hidden', 'val')
    assert.equal(div.getAttribute('hidden'), 'val')
    assert.equal(span.getAttribute('hidden'), 'val')
  })

  it('it can set multiple attributes', function() {
    const div = document.createElement('div')
    attr.set(div, {
      hidden: 'val',
      canchange: 'val'
    })
    assert.equal(div.getAttribute('hidden'), 'val')
    assert.equal(div.getAttribute('canchange'), 'val')
  })

  it('it can set multiple attributes on multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], {
      hidden: 'val',
      canchange: 'val'
    })
    assert.equal(div.getAttribute('hidden'), 'val')
    assert.equal(div.getAttribute('canchange'), 'val')

    assert.equal(span.getAttribute('hidden'), 'val')
    assert.equal(span.getAttribute('canchange'), 'val')
  })

  it('it can get attributes', function() {
    const div = document.createElement('div')
    attr.set(div, {
      hidden: 'val',
      canchange: 'val'
    })
    assert.equal(attr.get(div, 'hidden'), 'val')
    assert.equal(attr.get(div, 'canchange'), 'val')
  })

  it('it can get attributes on multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], {
      hidden: 'val',
      canchange: 'val'
    })
    assert.deepEqual(attr.get([div, span], 'hidden'), ['val', 'val'])
    assert.deepEqual(attr.get([div, span], 'canchange'), ['val', 'val'])
  })

  it('it can get multiple attributes', function() {
    const div = document.createElement('div')
    attr.set(div, {
      hidden: 'val',
      canchange: 'val'
    })
    assert.deepEqual(attr.get(div, ['hidden', 'canchange']), ['val', 'val'])
  })

  it('it can get multiple attributes on multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], {
      hidden: 'val',
      canchange: 'val'
    })
    assert.deepEqual(attr.get([div, span], ['hidden', 'canchange']), [['val', 'val'], ['val', 'val']])
  })

  it('it can remove attributes', function() {
    const div = document.createElement('div')
    attr.set(div, {
      hidden: 'val',
      canchange: 'val'
    })
    attr.remove(div, 'hidden')
    attr.remove(div, 'canchange')
    assert.deepEqual(attr.get(div, ['hidden', 'canchange']), [null, null])
  })

  it('it can remove attributes from multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], {
      hidden: 'val',
      canchange: 'val'
    })
    attr.remove([div, span], ['hidden', 'canchange'])
    assert.deepEqual(attr.get([div, span], ['hidden', 'canchange']), [[null, null], [null, null]])
  })

  it('it can detect attributes', function() {
    const div = document.createElement('div')
    attr.set(div, {
      hidden: 'val',
      canchange: 'val'
    })
    assert.equal(attr.has(div, 'hidden'), true)
    assert.deepEqual(attr.has(div, ['hidden', 'canchange', 'foo']), [true, true, false])
  })

  it('it can detect attributes on multiple nodes', function() {
    const div = document.createElement('div')
    const span = document.createElement('span')
    attr.set([div, span], {
      hidden: 'val',
      canchange: 'val'
    })
    assert.deepEqual(attr.has([div, span], 'hidden'), [true, true])
    assert.deepEqual(attr.has([div, span], ['hidden', 'canchange', 'foo']), [[true, true, false], [true, true, false]])
  })
})