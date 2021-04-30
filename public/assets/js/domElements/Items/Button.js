import { byId, create } from './Core/core.js';

/**
 * Returns HTML Button Element
 */
export default class Button {
	constructor(details) {
		const { id, classList, innerHTML, innerText, parentDiv } = details;
		this.button = create('button');
		if (id) this.button.id = id;
		if (classList)
			classList.forEach((className) => {
				this.button.classList.add(className);
			});
		if (innerText) this.button.innerText = innerText;
		if (innerHTML) this.button.innerHTML = innerHTML;
		if (parentDiv) byId(parentDiv).append(this.button);
		return this.button;
	}

	addEvent(eventType, callback) {
		this.button.addEventListener(eventType, callback);
	}

	replaceClass(oldClass, newClass) {
		this.button.classList.replace(oldClass, newClass);
	}

	removeClass(className) {
		this.button.classList.remove(className);
	}

	classList = () => this.button.classList;
}
