// 구름 애니메이션
let CLOUDE_ANIMATION = true;

$(function () {
    const $cloude = document.querySelectorAll(".svg__cloude");
    const CLOUDE_MAXSIZE = $cloude.length;

    const snap = Snap(".header__svg");

    // 스택
    const stack = new Stack();

    // header
    const $header = document.querySelector(".header");
    const $header_title = $(".header__title");
    const $header_ball = $(".header__ball");
    // about
    const $sections = $(".section__movebox");
    const $bubble = $(".about__svg");

    // 스크롤
    window.addEventListener(
        "scroll",
        function (e) {
            scrollCheck();
        },
        false
    );
    function scrollCheck() {
        // 스크롤 계산
        let scroll = this.scrollY;

        let per = Math.ceil(
            (scroll / (document.body.offsetHeight - window.innerHeight)) * 100
        );

        $sections.each(function (index, item) {
            $(item).removeClass("section--active");
        });

        // Header 스크롤
        if (scroll < $header.scrollHeight / 1.5) {
            CLOUDE_ANIMATION = true;
            _.throttle((e) => {
                cloudeAnimation();
            }, 50000);

            $header_title.css({
                transform: `translate(-50%,${per * 10}px) rotateX(15deg)`,
            });
            $header_ball.css({
                transform: `rotate(${per}deg)`,
            });
            console.log(per);
            $($bubble).removeClass("about__svg--active");
        } else if (scroll >= 1200 && scroll < 2200) {
            CLOUDE_ANIMATION = false;

            $($sections[0]).addClass("section--active");
            $($bubble).addClass("about__svg--active");
        } else if (scroll >= 2400 && scroll < 3400) {
            $($sections[1]).addClass("section--active");
        } else if (scroll >= 3600 && scroll < 4900) {
            $($bubble).removeClass("about__svg--active");
            $($sections[2]).addClass("section--active");
        } else if (scroll > 5100) {
            $($sections[3]).addClass("section--active");
        }
    }
    function cloudeAnimation() {
        if (CLOUDE_ANIMATION) {
            $cloude.forEach((item, idx) => {
                item.animate(
                    {
                        x: -200,
                    },
                    Math.ceil(Math.random() * (100000 - 70000)) +
                        70000 +
                        idx * 30000,
                    mina.easeinout(),
                    function () {
                        if (CLOUDE_ANIMATION) {
                            item.attr({
                                x: `${
                                    Math.ceil(Math.random() * (160 - 100)) +
                                    100 +
                                    idx * 100
                                }vw`,
                                y: Math.ceil(Math.random() * 250),
                            });

                            iscloude = false;
                        }
                    }
                );
            });
        }
    }

    cloudeAnimation();
    scrollCheck();
});
