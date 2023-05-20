
export function loadFontFamily(name: string) {
    if (name === "sans-serif" || name === "serif" || name === "monospace") {
        return;
    }
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = `https://fonts.googleapis.com/css?family=${name}`;
    document.head.appendChild(font);
}

export function updateClassFontFamily(className: string, fontFamily: string) {
    const stylesheet = document.styleSheets
    for (let i = 0; i < stylesheet.length; i++) {
        if (stylesheet[i].href === null) {
        const rules = stylesheet[i].cssRules
        for (let j = 0; j < rules.length; j++) {
            const rule = rules[j]
            if (rules[j] instanceof CSSStyleRule ) {
                const cssRule = rule as CSSStyleRule
                if (cssRule.cssText.startsWith(className)) {
                    cssRule.style.fontFamily = fontFamily
                }
            }
        }
    }
    }
}


export function updateAppFonts() {

}