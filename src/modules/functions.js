export class Size {
	width
	height
	constructor(width, height) {
		this.width = (width === undefined) ? 0 : width;
		this.height = (height === undefined) ? 0 : height;
	}
}


