$(document).ready(function () {
    //развернуть текст 
    let texthide = $('.text-hide');

    let texthideHeight;

    //убрать кнопку Показать полностью, если текст вмещается в блок
    texthide.each(function (index, el) {
        texthideHeight = $(this).height();
        let elements = $(this).find('*');
        let heightAll = 0;
        elements.each(function () {
            let elementsHeight = $(this).height();
            heightAll = heightAll + elementsHeight;
        });

        if (heightAll <= texthideHeight) {
            $(this).parents('.js-hide').find('.show-btn__wrapper').hide();
        }
    });

    // показать/скрыть текст
    $(document).on('click', ".show-btn", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.js-hide').find(".text-hide").removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parents('.js-hide').find(".text-hide").addClass('active');
        }

    });

    //развернуть карту
    $(document).on('click', ".contacts__map-btn", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#map").slideUp();
        }
        else {
            $(this).addClass('active');
            $("#map").slideDown();
        }

    });

    //градиент на свайпер главной страницы секции "Самое востребованное на рынке" по наведению мыши
    $(document).on('mouseenter', "#swiperDemanded", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', "#swiperDemanded", function () {
        $(this).removeClass('active');
    });

    //градиент на тумбы свайпера главной страницы секции "Уже несколько лет мы..." по наведению мыши
    $(document).on('mouseenter', "#swiperYearsThumbs", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', "#swiperYearsThumbs", function () {
        $(this).removeClass('active');
    });

    //градиент на свайпер карточки товара секции "Чертежи и 3D схемы" по наведению мыши
    $(document).on('mouseenter', ".swiper-card-drawings", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', ".swiper-card-drawings", function () {
        $(this).removeClass('active');
    });

    //градиент на свайпер карточки товара секции "Галерея товара" по наведению мыши
    $(document).on('mouseenter', "#swiperCardGallery", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', "#swiperCardGallery", function () {
        $(this).removeClass('active');
    });


    //инициализация свайпера с главной страницы на главном экране
    const swiperMain = new Swiper('.swiper-main', {
        speed: 700,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.main-button-next',
            prevEl: '.main-button-prev',
        },
    });

    //инициализация тумбов свайпера секции "Уже несколько лет..."
    const swiperYearsThumbs = new Swiper('.swiper-years-thumbs', {
        speed: 700,
        slidesPerView: 3.5,
        spaceBetween: 16,
        navigation: {
            nextEl: '.years-button-next',
            prevEl: '.years-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 6,
            },
            668: {
                slidesPerView: 3.19,
                spaceBetween: 8,
            },
            1024: {
                slidesPerView: 3.15,
                spaceBetween: 16,
            }
        },
    });

    //инициализация свайпера секции "Уже несколько лет..."
    const swiperYears = new Swiper('.swiper-years', {
        speed: 700,
        slidesPerView: 1,
        thumbs: {
            swiper: swiperYearsThumbs,
        },
        allowTouchMove: false
    });

    // подключение свайпера в секции на экранах >= 1024
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth >= 1024) {
        // секция "Самое востребованное на рынке"
        const swiperDemanded = new Swiper('.swiper-demanded', {
            speed: 700,
            spaceBetween: 18,
            slidesPerView: 3.39,
            navigation: {
                nextEl: '.demanded-button-next',
                prevEl: '.demanded-button-prev',
            },
        });

        // секция "Вы интересовались"
        const swiperInterested = new Swiper('.swiper-interested', {
            breakpoints: {
                1024: {
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 11,
                    speed: 700,
                    navigation: {
                        nextEl: '.interested-button-next',
                        prevEl: '.interested-button-prev',
                    },
                }
            }

        });

        // каталог 2го уровня секция "навигация"
        const swiperCatalog2lvlNav = new Swiper('.swiper-catalog2lvl-nav', {
            speed: 700,
            spaceBetween: 16,
            slidesPerView: 3.958,
        });

        // карточка товара секция "описание"
        const swiperCardDescription = new Swiper('.swiper-card-description', {
            speed: 700,
            spaceBetween: 6,
            slidesPerView: 10.8,
        });

        // карточка товара секция "Чертежи и 3D схемы"
        const swiperCardDrawings = new Swiper('.swiper-card-drawings', {
            speed: 700,
            spaceBetween: 12,
            slidesPerView: 1.8,
            navigation: {
                nextEl: '.card-drawings-button-next',
                prevEl: '.card-drawings-button-prev',
            },
        });

        // карточка товара секция "Галерея товара"
        const swiperCardGallery = new Swiper('.swiper-card-gallery', {
            speed: 700,
            spaceBetween: 14,
            slidesPerView: 5.28,
            navigation: {
                nextEl: '.card-gallery-button-next',
                prevEl: '.card-gallery-button-prev',
            },
        });

        // cтраница акции секция "То, что идет по данной акции"
        const swiperStockCards = new Swiper('.swiper-stock-cards', {
            speed: 700,
            spaceBetween: 18,
            slidesPerView: 3.39,
        });

        // карточка линии гранулирования секция "Товары, которые использовались в данном проекте"
        const swiperProductCards = new Swiper('.swiper-product-cards', {
            speed: 700,
            spaceBetween: 18,
            slidesPerView: 3.39,
        });

        // карточка линии гранулирования секция "Другие линии гранулирования"
        const swiperOtherGranulation = new Swiper('.swiper-other-granulation', {
            speed: 700,
            spaceBetween: 16,
            slidesPerView: 1.99,
        });

        // карточка товара секция "Чертежи и 3D схемы"
        const swiperCardDrawings2 = new Swiper('#swiperCardDrawings2', {
            speed: 700,
            spaceBetween: 12,
            slidesPerView: 1.8,
            navigation: {
                nextEl: '.card-drawings-button-next',
                prevEl: '.card-drawings-button-prev',
            },
        });

        // карточка реализованного проекта секция "Товары, которые использовались в данном проекте"
        const swiperProductCards2 = new Swiper('#swiper-product-cards2', {
            speed: 700,
            spaceBetween: 18,
            slidesPerView: 3.39,
        });

        // карточка реализованного проекта секция "Другие проекты"
        const swiperOtherProject = new Swiper('.swiper-other-project', {
            speed: 700,
            spaceBetween: 13,
            slidesPerView: 3.015,
        });

        // o компании секция "Уже несколько лет мы строим заводы и линии гранулирования"
        const swiperThanksLetters = new Swiper('.swiper-thanks-letters', {
            speed: 700,
            spaceBetween: 24,
            slidesPerView: 1.415,
        });
    }

    // переключение табов
    $(document).on('click', ".tab", function () {
        $('.tab-content').removeClass('active');
        $('#' + $(this).attr("data-tab")).addClass('active');
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });

    // табы, на мобилках включать длинные карточки
    if ((pageWidth >= 320) && (pageWidth < 668)) {
        $("#productsTabLines").trigger("click");
        $("#searchTabLines").trigger("click");
    }
    // табы, начиная с планшетов включать плитки
    if (pageWidth >= 668) {
        $("#productsTabTiles").trigger("click");
        $("#searchTabTiles").trigger("click");
    }

    //сортировка на каталоге 2го уровня
    $(document).on('click', ".products__filters-item", function () {
        if ($(this).hasClass('active')) {
            if ($(this).hasClass('sort')) {
                $(this).removeClass('sort');
            }
            else {
                $(this).addClass('sort');
            }
        }
        else {
            $(".products__filters-item").removeClass('sort');
        }
        $(".products__filters-item").removeClass('active');
        $(this).addClass('active');

    });

    //выпадашка со списком областей в реализованных проектах
    $(document).on('click', ".projects__select", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.projects__selection').find('.projects__select-menu').removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parents('.projects__selection').find('.projects__select-menu').addClass('active');
        }

    });


    //передача текста в выпадашку с выбранной области в реализованных проектах
    $(document).on('click', ".projects__select-item", function () {
        $(this).parents('.projects__selection').find('.projects__select-text').html($(this).attr('data-text'));
    });

    //выпадашка с сортировкой в каталоге 2 уровня и странице поиска
    $(document).on('click', ".products__filters-list", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.products__filters').find('.products__filters-dropdown').removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parents('.products__filters').find('.products__filters-dropdown').addClass('active');
        }

    });

    //передача текста в выпадашку с сортировкой в каталоге 2 уровня и поиске
    $(document).on('click', ".products__filters-dropdown-item", function () {
        $(this).parents('.products__filters').find('.products__filters-list-span').html($(this).attr('data-text'));
    });


    //изменение картинки при наведении у карточек каталога 2го уровня
    $(document).on('mouseenter', ".products__tiles-col-item", function () {
        // $(this).parents('.products__tiles-item-image').find(".products__tiles-col-item").removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });

    //изменение картинки при наведении у "карточка линии гранулирования" секция "другие линии гранулирования"
    $(document).on('mouseenter', ".other-granulation__col-item", function () {
        $(this).parents('.other-granulation__item').find(".other-granulation__col-item").removeClass('active');
        $(this).addClass('active');
    });

    //обернуть таблицы со страницы Дилерам в обертку для скролла
    $('.text-content table').wrap('<div class="scroll-table" />');

    //открытие мобильного меню кликом по бургеру
    $(document).on('click', '.header__burger-btn', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header').removeClass('active');
            $('.header__mobile-menu').removeClass('active');
            $('html').removeClass('hide-scroll');
        }
        else {
            $(this).addClass('active');
            $('.header').addClass('active');
            $('.header__mobile-menu').addClass('active');
            $('html').addClass('hide-scroll');
            $('.header').addClass('fixed');
        }
    });

    //раскрытие подменю в мобильном меню по клику на стрелку 
    $(document).on('click', '.header__mobile-menu-links-arrow', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.header__mobile-menu-links-item').find('.header__mobile-menu-dropdown').removeClass('active');
            $(this).parents('.header__mobile-menu-links-item').find('.header__mobile-menu-dropdown-link').removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parents('.header__mobile-menu-links-item').find('.header__mobile-menu-dropdown').addClass('active');
            $(this).parents('.header__mobile-menu-links-item').find('.header__mobile-menu-dropdown-link').addClass('active');
        }
    });

    //закрытие куков по крестику
    $(document).on('click', '.cookies .btn-close', function () {
        $('.cookies').remove();
    });

    //закрытие куков по кнопке "принимаю"
    $(document).on('click', '.cookies__btn-accept', function () {
        $('.cookies').remove();
    });

    //фиксированная шапка на скролле 
    let header = document.querySelector('.header');
    headerHeight = header.clientHeight;

    if (pageWidth < 1024) {
        document.onscroll = function () {
            let scroll = window.scrollY;

            if (scroll > headerHeight) {
                header.classList.add('fixed');
                document.body.style.paddingTop = headerHeight + 'px';
                if (pageWidth >= 668) {
                    document.querySelector('.header__logo-link').style.transform = 'scale(1.496)';
                }
            }
            else {
                header.classList.remove('fixed');
                document.body.removeAttribute('style');
                if (pageWidth >= 668) {
                    document.querySelector('.header__logo-link').removeAttribute('style');
                }
            }
        };
    }

    //открыть поиск по клику на иконку поиска 
    if (pageWidth < 1024) {
        $(document).on('click', '.header__input-label', function () {
            $('.search').addClass('active');
            $('html').addClass('hide-scroll');

        });
    }

    //закрытие поиска по кнопке "назад"
    $(document).on('click', '.search .navigation__back', function () {
        $('.search').removeClass('active');
        $('html').removeClass('hide-scroll');

    });

    //поиск на 1024 в шапке
    $(document).on('input', '.header__input-search', function () {
        $(this).addClass('active');
        $('.header .work').addClass('active');
        $('.header .search__result').addClass('active');
        $('.header__form-search-wrapper').addClass('active');
    });

    $(document).on('click', '.header__input-reset-label', function () {
        $('.header__input-search').removeClass('active');
        $('.header .work').removeClass('active');
        $('.header .search__result').removeClass('active');
        $('.header__form-search-wrapper').removeClass('active');
    });

    $(document).on('blur', '.header__input-search', function () {
        $('.header__input-search').removeClass('active');
        $('.header .work').removeClass('active');
        $('.header .search__result').removeClass('active');
        $('.header__form-search-wrapper').removeClass('active');
    });


    //открытие видео на странице о компании
    $(document).on('click', '.about-company__video-link', function (e) {
        e.preventDefault();
        let firstString = 'https://www.youtube.com/embed/';
        let link = $(this).attr('href');
        let newLink;
        if (link.indexOf('v=') !== -1) {
            let arrayLinks = link.split('v=');
            let secondString = arrayLinks[arrayLinks.length - 1];
            newLink = firstString + secondString;
        }
        else {
            newLink = link;
        }

        $.fancybox.open({
            src: newLink,
            type: 'iframe'
        });

    });


    //закрытие поиска по кнопке "назад"
    $(document).on('click', '.header__input-label', function (e) {
        e.preventDefault();
    });

    //скролл страницы наверх
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    //https://www.youtube.com/watch?v=uHKfrz65KSU
    //https://youtu.be/7nQB6dfzS5k

});

