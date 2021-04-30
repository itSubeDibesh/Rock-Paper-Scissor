import { byId, create } from './Core/core.js';

/**
 * Returns HTML Th Element
 */
export default class Th {
	constructor(details) {
		const { id, classList, innerHTML, innerText, parentDiv } = details;
		this.th = create('th');
		if (id) this.th.id = id;
		if (classList)
			classList.forEach((className) => {
				this.th.classList.add(className);
			});
		if (innerText) {
			this.th.innerText = innerText.toString();
		}
		if (innerHTML) {
			this.th.innerHTML = innerHTML;
		}
		if (parentDiv) byId(parentDiv).append(this.th);
		return this.th;
	}

	setText(text) {
		this.th.innerText = text;
	}
}
