ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
            center: [59.938999, 30.325500],
            zoom: 17
        }, {
            searchControlProvider: "yandex#search"
        }),

        myPlacemarkWithContent = new ymaps.Placemark([59.938784, 30.323126], {
            hintContent: "ул. Большая Конюшенная, 19/8, Санкт-Петербург",
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#imageWithContent",
            // Своё изображение иконки метки.
            iconImageHref: "img/map-pin.svg",
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -140]
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent)

});