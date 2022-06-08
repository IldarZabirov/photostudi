//когда юзер прокрутит вниз на 1000px от начала документа то кнопка покажется

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("footer__button_up").style.display = "block";
    }

    else {
        document.getElementById("footer__button_up").style.display = "none";
    }
}

//когда юзер нажмет на кнопку кидает на начало страницы

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}