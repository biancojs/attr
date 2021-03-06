import domToArray from 'bianco.dom-to-array'

/**
 * Normalize the return values, in case of a single value we avoid to return an array
 * @param   { Array } values - list of values we want to return
 * @returns { Array|string|boolean } either the whole list of values or the single one found
 * @private
 */
const normalize = values => values.length === 1 ? values[0] : values

/**
 * Parse all the nodes received to get/remove/check their attributes
 * @param   { HTMLElement|NodeList|Array } els    - DOM node/s to parse
 * @param   { string|Array }               name   - name or list of attributes
 * @param   { string }                     method - method that will be used to parse the attributes
 * @returns { Array|string } result of the parsing in a list or a single value
 * @private
 */
function parseNodes(els, name, method) {
  const names = typeof name === 'string' ? [name] : name
  return normalize(domToArray(els).map(el => {
    return normalize(names.map(n => el[method](n)))
  }))
}

/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Object }              name  - either the name of the attribute to set
 *                                                 or a list of properties as object key - value
 * @param   { string }                     value - the new value of the attribute (optional)
 * @returns { HTMLElement|NodeList|Array } the original array of elements passed to this function
 *
 * @example
 *
 * import { set } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * set(img, 'width', 100)
 *
 * // or also
 * set(img, {
 *   width: 300,
 *   height: 300
 * })
 *
 */
export function set(els, name, value) {
  const attrs = typeof name === 'object' ? name : { [name]: value }
  const props = Object.keys(attrs)

  domToArray(els).forEach(el => {
    props.forEach(prop => el.setAttribute(prop, attrs[prop]))
  })
  return els
}

/**
 * Get any attribute from a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to get
 * @returns { Array|string } list of the attributes found
 *
 * @example
 *
 * import { get } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * get(img, 'width') // => '200'
 *
 * // or also
 * get(img, ['width', 'height']) // => ['200', '300']
 *
 * // or also
 * get([img1, img2], ['width', 'height']) // => [['200', '300'], ['500', '200']]
 */
export function get(els, name) {
  return parseNodes(els, name, 'getAttribute')
}

/**
 * Remove any attribute from a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to remove
 * @returns { HTMLElement|NodeList|Array } the original array of elements passed to this function
 *
 * @example
 *
 * import { remove } from 'bianco.attr'
 *
 * remove(img, 'width') // remove the width attribute
 *
 * // or also
 * remove(img, ['width', 'height']) // remove the width and the height attribute
 *
 * // or also
 * remove([img1, img2], ['width', 'height']) // remove the width and the height attribute from both images
 */
export function remove(els, name) {
  return parseNodes(els, name, 'removeAttribute')
}

/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to detect
 * @returns { boolean|Array } true or false or an array of boolean values
 * @example
 *
 * import { has } from 'bianco.attr'
 *
 * has(img, 'width') // false
 *
 * // or also
 * has(img, ['width', 'height']) // => [false, false]
 *
 * // or also
 * has([img1, img2], ['width', 'height']) // => [[false, false], [false, false]]
 */
export function has(els, name) {
  return parseNodes(els, name, 'hasAttribute')
}

export default {
  get,
  set,
  remove,
  has
}