import settingsElements from '../gameAssets/elements.js';
import Buttons from './Items/Button.js';
import Image from './Items/Image.js';
import { byId } from './Items/Core/core.js';
import Th from './Items/Th.js';

const { scoreBoard, buttons, img, parentDiv,boxShadow } = settingsElements;

/**
 * Element To Extract from element dataset
 * @param {array} extraction 
 * @returns HTMLElement
 */
function setDOMElement(extraction) {
	/**
     * Returns A function that appends and returns the dom element 
     * @param {array} elementCollection 
     * @param {HTMLElement} domElement 
     */
	return (elementCollection, domElement) => {
		// Looping through element collection
		elementCollection.forEach((item) => {
			// Looping through every element on object
			for (const key in item) {
				// Checking if item has its own property to extract element
				if (item.hasOwnProperty.call(item, key)) {
					// Object Element Extraction
					const elementBody = item[key];
					// Creating New Element to Append on Dom
					const setDOM = new domElement(elementBody);
					// Extracting the Parent div to append on dom
					byId(elementBody.parentDiv).append(setDOM);
					//  Push Element to Desired Element Set
					extraction.push(setDOM);
				}
			}
		});
	};
}

/**
 * Returns Other Id Based Elements
 * @param {array} extraction 
 * @returns HTMLElement
 */
function setOtherElement(extraction) {
	/**
     * @param {string} elementId 
     * @returns HTMLElement
     */
	return (elementId) => {
		// Gets Element By ID
		const element = byId(elementId);
		extraction.push(element);
	};
}

/**
 * 
 * @param {string} extarction 
 * @returns HTMLElement
 */
function setOtherElementCollectionObj(extarction) {
	/**
     * @param {object} elementGroup 
     * @returns array
     */
	return (elementGroup) => {
		for (const key in elementGroup) {
			if (elementGroup.hasOwnProperty.call(elementGroup, key)) {
				extarction.push(byId(key));
			}
		}
	};
}

/**
  * Sets Buttons to Element
  * @param {array} extractButtons 
  */
export const setButtons = (extractButtons) => setDOMElement(extractButtons)(buttons, Buttons);

/**
  * Sets Images to Element
  * @param {array} extractImages 
  */
export const setImages = (extractImages) => setDOMElement(extractImages)(img, Image);

/**
 * Sets Th to Element
 * @param {array} extractTh 
 */
export const setTh = (extractTh) => setDOMElement(extractTh)(scoreBoard, Th);

/**
 * Sets Scoreboard to Element
 * @param {array} extractScoreBoard 
 */
export const setScoreBoard = (extractScoreBoard) =>
	setOtherElement(extractScoreBoard)(scoreBoard[0].yourScore.superParent);

/**
 * Sets Footer to Element
 * @param {array} extractFooter 
 */
export const setFooter = (extractFooter) => setOtherElement(extractFooter)(buttons[0].playAgain.superParent);

/**
 * Sets parent Div to Element
 * @param {array} extractParentDiv 
 * @returns array
 */
export const setParentDiv = (extractParentDiv) => setOtherElementCollectionObj(extractParentDiv)(parentDiv);

/**
 * Returns Box Shadow
 */
export const getBoxShadow = boxShadow;