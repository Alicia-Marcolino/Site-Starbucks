'use stric'

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (className == "light-theme") {
        this.textcontent = "Dark";
        console.log('current class name: ' + className);
    }
    else {
        this.textcontent = "Light";
    }
});