import { byId, create } from './Core/core.js';

/**
 * Returns HTML Image Element
 */
export default class Image {
	constructor(details) {
		const { src, width, height, alt, id, classList, parentDiv } = details;
		this.image = create('img');
		if (src) this.image.src = src;
		if (width) this.image.width = width;
		if (height) this.image.height = height;
		if (alt) this.image.alt = alt;
		if (id) this.image.id = id;
		if (classList)
			classList.forEach((className) => {
				this.image.classList.add(className);
			});
		if (parentDiv) byId(parentDiv).append(this.image);
		return this.image;
	}

	style = () => this.image.style;

	replaceClass(oldClass, newClass) {
		if (oldClass && newClass) this.image.classList.replace(oldClass, newClass);
	}

	removeClass(className) {
		s;
		if (className) this.image.classList.remove(className);
	}

	classList = () => this.image.classList;
}
