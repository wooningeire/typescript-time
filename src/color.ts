export default class Color {
	red: number;
	green: number;
	blue: number;
	alpha: number;

	private constructor(red: number, green: number, blue: number, alpha: number=1) {
		this.red = red;
		this.green = green;
		this.blue = blue;
		this.alpha = alpha;
	}

	static rgb(red: number, green: number, blue: number): Color {
		return new this(red, green, blue);
	}

	static rgba(red: number, green: number, blue: number, alpha: number): Color {
		return new this(red, green, blue, alpha);
	}

	toRgbaString(): string {
		return `rgba(${[...this].map(x => x * 255)})`;
	}

	toHexString(): string {
		return `#${[...this].map(x => Math.round(x * 255).toString(16)).join("")}`;
	}

	* [Symbol.iterator]() {
		yield* [this.red, this.green, this.blue, this.alpha];
	}
}