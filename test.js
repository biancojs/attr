require('jsdom-global')()
const assert = require('assert')
const { set, get } = require('./')
const body = document.body

describe('Bianco attr', function() {
  beforeEach(function () {
    var div = document.createElement('div')
    div.innerHTML = ``
    body.appendChild(div)
  })
})