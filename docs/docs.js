// Theme Switch
var theme = 'light';
if (localStorage.getItem('color-theme')) {
	if (localStorage.getItem('color-theme') === 'dark') {
		theme = 'dark';
	}
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	theme = 'dark';
}
document.documentElement.setAttribute('data-theme', theme);
var switcher = document.querySelector("#theme-switcher");
switcher.addEventListener('click', () => {
	var currentTheme = document.documentElement.getAttribute('data-theme');
	localStorage.removeItem('color-theme');
	if(currentTheme === 'dark'){
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('color-theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('color-theme', 'dark');
	}
});