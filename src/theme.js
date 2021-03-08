const localTheme = localStorage.getItem('theme');

const theme = !localTheme
  ? {
    bgPrimary: '#050F1E',
    bgSecondary: '#06152A',
    textPrimary: '#ffffff',
    textSecondary: '#C2590D',
  }
  : JSON.parse(localStorage.getItem('theme'));

if (!localTheme) {
  localStorage.setItem('theme', JSON.stringify(theme));
}

export default theme;
