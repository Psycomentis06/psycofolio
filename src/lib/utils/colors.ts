export type RGB = [number, number, number];
export type RGBA = [number, number, number, number];
export type HSL = [number, number, number];
export enum ColorType {
    RGB,
    RGBA,
    HSL,
    HEX,
}

export function guessColorType(color: string): ColorType {
    if (color.startsWith('#')) {
        return ColorType.HEX;
    } else if (color.startsWith('rgb')) {
        return color.startsWith('rgba') ? ColorType.RGBA : ColorType.RGB;
    } else if (color.startsWith('hsl')) {
        return ColorType.HSL;
    } else {
        throw new Error('Invalid color');
    }
}

export function parseColor(color: string): RGB | RGBA | HSL | string | null {
    switch (guessColorType(color)) {
        case ColorType.RGB:
            return strToRGB(color);
        case ColorType.RGBA:
            return strToRGBA(color);
        case ColorType.HSL:
            return color;
        case ColorType.HEX:
            return hexToRGBA(color);
    }
}


export function isTransparent(color: RGBA): boolean {
    return color[3] === 0;
}

export function strToRGB(color: string): RGB {
    const [r, g, b] = color.match(/\d+/g)!.map(Number);
    return [r, g, b];
}

export function strToRGBA(color: string): RGBA {
    let [r, g, b, a] = color.match(/\d+/g)!.map(Number);
    if (a === undefined) a = 1
    return [r, g, b, a];
}

export function rgbToStr(color: RGB): string {
    return `rgb(${color.join(',')})`;
}

export function rgbaToStr(color: RGBA): string {
    return `rgba(${color.join(',')})`;
}

export function hexToRGBA(hex: string): RGBA {
    hex = hex.replace('#', '');
    const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return [r, g, b, 1];
}

// Thanks to Nikolai for the explanation
// https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
export function rgbaToHSL(rgb: RGBA | RGB): HSL {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;

    let min = Math.min(r, g, b); // R value
    let max = Math.max(r, g, b); // B value
    let h = 0; // H value
    let s = 0; // S value
    let l = (min + max) / 2; // L value

    if (r === g && g === b && min === max) {
        s = 0;
        h = 0;
    } else if (min === max) {
        s = 0;
    }

    if (l <= 0.5) {
        s = (max - min) / (max + min);
    } else {
        s = (max - min) / (2 - max - min);
    }

    if (max === r) {
        h = (g - b) / (max - min);
    } else if (max === g) {
        h = 2 + (b - r) / (max - min);
    } else if (max === b) {
        h = 4 + (r - g) / (max - min);
    }

    h *= 60;
    if (h < 0) {
        h += 360;
    }

    return [Math.round(h) , Math.round(s * 100), Math.round(l * 100)];
}

export function hslToRgba(hsl: HSL): RGBA {
    let h = hsl[0] / 360;
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;

    if (s === 0) {
        l = Math.round(l * 255);
        return [l, l, l, 1];
    }

    let temp1 = 0;
    if (l < 0.5) {
        temp1 = l * (1 + s);
    } else {
        temp1 = l + s - l * s;
    }

    let temp2 = 2 * l - temp1;

    let tempR = h + 0.333;
    let tempG = h;
    let tempB = h - 0.333;

    const tmpValRegulate = (tempVal: number) => {
        if (tempVal < 0) {
            tempVal += 1;
        } else if (tempVal > 1) {
            tempVal -= 1;
        }
        return tempVal;
    }

    tempR = tmpValRegulate(tempR);
    tempG = tmpValRegulate(tempG);
    tempB = tmpValRegulate(tempB);

    const testTemp = (tempR: number) => {
        if (6 * tempR < 1) {
            return temp2 + (temp1 - temp2) * 6 * tempR;
        } else if (2 * tempR < 1) {
            return temp1;
        } else if (3 * tempR < 2) {
            return temp2 + (temp1 - temp2) * (0.666 - tempR) * 6;
        } else {
            return temp2;
        }
    }
    let r = testTemp(tempR);
    let g = testTemp(tempG);
    let b = testTemp(tempB);

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return [r, g, b, 1];
}

export function hslToStr(color: HSL): string {
    return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
}

export function hexToHSL(hex: string): HSL {
    hex = hex.replace('#', '');
    return rgbaToHSL(hexToRGBA(hex));
}

export function rgbaToHex(rgba: RGBA): string {
    const [r, g, b] = rgba;
    const rs = r.toString(16);
    const gs = g.toString(16);
    const bs = b.toString(16);
    const addZero = (str: string) => {
        if (str.length === 1) {
            return `0${str}`;
        }
        return str;
    }
    return `#${addZero(rs)}${addZero(gs)}${addZero(bs)}`;
}

export function getBrightness(color: HSL): number {
    return color[2];
}

export function getDarkness(color: HSL): number {
    return 100 - color[2];
}

/**
 * Darken a color by a certain amount
 * @param color color to darken
 * @param amount amount to darken the color by (%)
 * @returns darkened color
 */
export function darkenColor(color: HSL, amount: number): HSL {
    return [color[0], color[1], color[2] - amount];
}


/**
 * Lighten a color by a certain amount
 * @param color color to lighten
 * @param amount amount to lighten the color by (%)
 * @returns lightened color
*/
export function lightenColor(color: HSL, amount: number): HSL {
    return [color[0], color[1], color[2] + amount];
}

/**
 * Get the readable color of two colors
 * @param fc first color should be the foreground color
 * @param sc second color should be the background color
 * @returns the readable color for the foreground color
 * @example
 * const fc = hexToHSL('#ffffff');
 * const sc = hexToHSL('#000000');
 * const readableColor = getReadableColor(fc, sc);
 * console.log(hslToStr(readableColor)); // hsl(0, 0%, 100%)
*/
export function getReadableColor(fc: HSL, sc: HSL): HSL {
    const weight1 = 0.7; // weight of the brightness of the foreground color
    const weight2 = 0.3; // weight of the brightness of the background color
    const fcBrightness = getBrightness(fc);
    const scBrightness = getBrightness(sc);
    if (fcBrightness > scBrightness) {
        return fc;
    } else {
        //const newBrightness = (fcBrightness * weight1) + (scBrightness * weight2); // this is the old way of calculating the brightness
        // const newBrightness = fcBrightness - (fcBrightness - scBrightness) * weight2; // this is the new way of calculating the brightness
        const newBrightness = fcBrightness * 0.4; // Scaling the brightness
        return [fc[0], fc[1], newBrightness];
    }
}

/**
 * Get the background color of an HTML element if it is transparent it will recursively search for the parent element until it finds a non-transparent color
 * Keep in mind that this function will not work if the element is not attached to the DOM 
 * @param el HTML Element
 * @param transparent if true return the color even if it is transparent otherwise it will 
 * recursively search for the parent element until it finds a non-transparent color
 * @returns color 
 */
export function getHtmlElementBgColor(el: HTMLElement, from: HTMLElement | null = null): string {
    if (from === null) from = document.body;
    return getComputedStyle(from).backgroundColor;
}