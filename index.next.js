import domToArray from 'bianco.dom-to-array'

/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|Array } els   - DOM node/s to parse
 * @param   { String }            name  - name of the attribute to set
 * @param   { String }            value - the new value of the attribute
 * @returns { Array } the original array of elements passed to this function
 */
export function set(els, name, value) {
  domToArray(els).forEach(el => el.setAttribute(name, value))
  return els
}

export function get(els, name) {
  return domToArray(els).map(el => el.getAttribute(name))
}

export function remove(els, name) {
  domToArray(els).forEach(el => el.removeAttribute(name))
  return els
}

export function has(els, name) {
  return domToArray(els).map(el => el.hasAttribute(name))
}

export default {
  get,
  set,
  remove,
  has
}