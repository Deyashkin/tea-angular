$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
        }
    ).init();


    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

        let indexInput = $('#index');

        indexInput.on("input", function () {
            let value = this.value;
            let newValue = '';

            for (let i = 0; i < value.length; i++) {

                if (value[i] >= '0' && value[i] <= '9') {
                    newValue += value[i];
                } else {
                    alert('Можно ввести только цифры!');
                }

                if (newValue.length > 6) {
                    newValue = newValue.slice(0, 6);
                    alert('Можно ввести максимум 6 цифр!');
                }
            }

            this.value = newValue;
        });
    }
)
