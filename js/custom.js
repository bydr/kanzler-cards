function theRotator() {

    let itemImage = $('.image-box__slider .image-box__item');
    // Устанавливаем прозрачность всех картинок в 0
    itemImage.css({opacity: 0.0});

    // Берем первую картинку и показываем ее (по пути включаем полную видимость)
    itemImage.eq(0).css({opacity: 1.0});

    // Вызываем функцию rotate для запуска слайдшоу, 3000 = смена картинок происходит раз в 3 секунд
    setInterval('rotate()',3000);
}

function rotate() {
    let itemShowed = $('.image-box__slider .image-box__item.show');
    let itemFirst = $('.image-box__slider .image-box__item').eq(0);

    // Берем первую картинку
    var current = (itemShowed?  itemShowed : itemFirst);

    // Берем следующую картинку, когда дойдем до последней начинаем с начала
    var next = ((current.next().length) ? ((current.next().hasClass('show')) ? itemFirst :current.next()) : itemFirst);

    // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
    next.css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1000);

    // Прячем текущую картинку
    current.animate({opacity: 0.0}, 1000).removeClass('show');
};

$(document).ready(function() {
    // Запускаем слайдшоу
    theRotator();
});
