/**
 * Returns Element By Id
 * @param {string} elementName 
 * @returns HTMLElement
 */
export const byId = (elementName) => document.getElementById(elementName);

/**
 * Returns Html Elements
 * @param {string} elementName 
 * @returns HTMLCollectionOf<Element>
 */
export const byClassName = (elementName) => document.getElementsByClassName(elementName);

/**
 * Creates Element From Defined Tag
 * @param {string} tagName 
 * @returns HTMLElement
 */
export const create = (tagName)=> document.createElement(tagName)