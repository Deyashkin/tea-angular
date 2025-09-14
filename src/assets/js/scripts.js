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


    $('.slick-slider').slick(
            {
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                prevArrow: '<button type="button" class="slick-prev"><svg width="20px" height="20px" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.32935 9.47742L13.7908 0.176819C13.9865 -0.0384587 14.2551 -0.164517 14.547 -0.178062C14.8389 -0.191607 15.1179 -0.0909537 15.3323 0.105292L16.0152 0.729469C16.4596 1.13622 16.4912 1.82934 16.0858 2.27487L8.98048 10.085L16.7758 17.212C16.9903 17.4082 17.116 17.6772 17.1294 17.9697C17.1427 18.2625 17.042 18.5421 16.8463 18.7575L16.2232 19.4421C16.0273 19.6574 15.7589 19.7835 15.467 19.797C15.1751 19.8106 14.8961 19.7099 14.6817 19.5137L5.40013 11.0282C5.18513 10.8313 5.05964 10.561 5.04692 10.268C5.03285 9.97387 5.13319 9.6932 5.32935 9.47742Z" fill="#595555"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5103 10.5226L8.04881 19.8232C7.85312 20.0385 7.58452 20.1645 7.2926 20.1781C7.00068 20.1916 6.72174 20.091 6.50726 19.8947L5.82438 19.2705C5.38 18.8638 5.34837 18.1707 5.75385 17.7251L12.8591 9.91505L5.0638 2.78805C4.84932 2.5918 4.72357 2.32276 4.71022 2.03028C4.69685 1.73747 4.79757 1.45792 4.99326 1.24248L5.6164 0.557867C5.81225 0.342583 6.08069 0.216532 6.37261 0.202987C6.66452 0.189442 6.94347 0.290095 7.15795 0.48634L16.4395 8.97182C16.6545 9.16869 16.78 9.43905 16.7927 9.73205C16.8068 10.0261 16.7064 10.3068 16.5103 10.5226Z" fill="#595555"/></svg></button>'
            }
        );

        $(function () {
            var icons = {
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            };
            $("#accordion").accordion({
                heightStyle: "content",
                collapsible: true,
                icons: icons
            });
            $("#toggle").button().on("click", function () {
                if ($("#accordion").accordion("option", "icons")) {
                    $("#accordion").accordion("option", "icons", null);
                } else {
                    $("#accordion").accordion("option", "icons", icons);
                }
            });
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

        $('#form-button').click(function (event) {
            event.preventDefault();
            let nameInput = $('#name');
            let surnameInput = $('#surname');
            let phoneInput = $('#phone');
            let countryInput = $('#country');
            let addressInput = $('#address');

            if (!nameInput.val()) {
                alert('Заполните поле "Имя"');
                return;
            }
            if (!surnameInput.val()) {
                alert('Заполните поле "Фамилия"');
                return;
            }
            if (!phoneInput.val()) {
                alert('Заполните поле "Телефон"');
                return;
            }
            if (!countryInput.val()) {
                alert('Заполните поле "Страна"');
                return;
            }
            if (!indexInput.val()) {
                alert('Заполните поле "Индекс"');
                return;
            }
            if (indexInput.val().length !== 6) {
                alert('Поле "Индекс" обязательно должно быть длинной в 6 цифр');
                return;
            }
            if (!addressInput.val()) {
                alert('Заполните поле "Адресс"');
                return;
            }

            $(indexInput).on('keypress', function (e) {
                const numberValue = Number(e.key);
                if (!isNaN(numberValue)) {
                    e.preventDefault();
                }
            });

            $('.order-form').hide();
            $('#thank-you-message').show();

            alert('Спасибо за заказ!')
        });
    }
)