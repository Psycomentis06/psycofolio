
export function setTheme(name:string) {
  document.documentElement.setAttribute('data-theme', name);
  localStorage.setItem('theme', name);
}

export function getTheme() {
  return localStorage.getItem('theme');
}

export function initTheme() {
  let theme = getTheme();
  if (theme === null) {
    const defaultTheme = "night";
    setTheme(defaultTheme);
    return defaultTheme
  } 
    setTheme(theme);
    return theme;
}