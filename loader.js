let percentLoader = document.querySelector("#percentage-loader");
let loader = document.querySelector('.loader-container');

window.onload = function() {
    
    let percent = 0;
    let interval = setInterval(function() {
        percent += 1;
        if (percent > 100) {
            clearInterval(interval);
        } else {
            percentLoader.innerHTML = percent + "%";
        }
    }, 50);

    let timeout;

    function myFunction() {
        timeout = setTimeout(transit, 6000);
    }

    function transit() {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            //To prevent transit function from being called multiple times
            //and the 'loader' element is already removed from the DOM before
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        })
    };

    myFunction();
}
    