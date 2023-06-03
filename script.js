window.addEventListener('DOMContentLoaded', (event) => {
    let slides = document.getElementsByClassName('slide');
    let counter = 0;

    function controller(i) {
        counter = counter + i;
        if (counter > slides.length - 1) {
            counter = 0;
        }
        if (counter < 0) {
            counter = slides.length - 1;
        }
        slider(counter);
    }

    slider(counter);

    function slider(count) {
        for (let a of slides) {
            a.style.display = "none";
        }

        if (count === 2) {
            let captions = document.getElementsByClassName('caption');
            captions[count].style.color = 'white';
        }

        slides[count].style.display = "block";
    }

    let left = document.querySelector('.prev');
    let right = document.querySelector('.next');

    left.addEventListener('click', () => {
        controller(-1);
    });

    right.addEventListener('click', () => {
        controller(1);
    });
});
