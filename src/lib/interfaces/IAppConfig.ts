export interface IConfigTheme {
    default: string;
    available: {code: string, name: string}[];
}

export interface IConfigLanguageFontProperties {
    fontFamily: string;
}

export interface IConfigLanguageFont {
    global: IConfigLanguageFontProperties;
    title: IConfigLanguageFontProperties;
    subtitle: IConfigLanguageFontProperties;
    text: IConfigLanguageFontProperties;
    special: IConfigLanguageFontProperties;
}

export interface IConfigLanguageAvailableProperties {
        code: string;
        name: string;
        flag: string;
        rtl: boolean;
        fonts: IConfigLanguageFont;

}

export interface IConfigLanguage {
    default: string;
    available: IConfigLanguageAvailableProperties[];
}
export interface IAppConfig {
    language: IConfigLanguage[];
    themes: IConfigTheme; 
}