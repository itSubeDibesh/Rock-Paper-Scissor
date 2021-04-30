/**
 * Returns Random number 
 * @param {number} maxLength 3
 * @returns number
 */
export function randomNumber(maxLength = 3) {
	return Math.floor(Math.random() * maxLength);
}