const refs = {
    body: document.querySelector('body'),
    switcher: document.querySelector('.js-switch-input'),
}
const themeInStorage = localStorage.getItem('theme');

if(themeInStorage){
    if(themeInStorage === 'light-theme'){
        refs.body.classList.add('light-theme');
        refs.switcher.checked = false;
    }
    if(themeInStorage === 'dark-theme'){
        refs.body.classList.add('dark-theme');
        refs.switcher.checked = true;
    }
} else{
    refs.body.classList.add('light-theme');
}

refs.switcher.addEventListener('change', handleControllerChange);

function handleControllerChange(event) {
    const controllerStatus = event.target.checked;
    if (controllerStatus){
        refs.body.classList.remove('light-theme');
        refs.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else{
        refs.body.classList.remove('dark-theme');
        refs.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
}