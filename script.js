function applySystemTheme(e) {
    const isDark = e.matches;

    if (isDark) {
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
    }
}

// Check initial theme
const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
applySystemTheme(darkThemeQuery);

// Listen to changes in system theme
darkThemeQuery.addEventListener('change', applySystemTheme);