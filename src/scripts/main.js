$(function () {
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });

    const header = {
        text: document.querySelector(".header__title"),
        cloudes: document.querySelectorAll(".header__cloude"),
        land: document.querySelector(".header__land"),
        bitchBall: document.querySelector(".header__bitchBall"),
        tree: document.querySelector(".header__tree"),
        header: document.getElementById("header"),
        toggle: true,
    };

    const about = {
        about: document.getElementById("about"),

        toggle: false,
    };

    const skill = {
        skill: document.getElementById("skill"),
        jelly: document.querySelector(".jallyfish2"),
        toggle: false,
    };
    const portfolio = {
        portfolio: document.getElementById("portfolio"),
        toggle: false,
    };
    const thankyou = {
        thankyou: document.getElementById("thankyou"),
        toggle: false,
    };

    // 메뉴
    const nav = [];

    // 해파리
    const jelly = document.querySelectorAll(".jallyfish");
    // 물방울
    const waterball = document.querySelectorAll(".water__bubble");
    // 물고기
    const fish = document.querySelector(".water__fish");
    // 해파리 애니메이션
    const jelly_animation = anime({
        targets: jelly,
        translateX: [
            {
                value: Math.ceil(Math.random() * 600 - 500) + 10,
                duration: 5000,
            },
            {
                value: Math.ceil(Math.random() * 400 + 10) + 10,
                duration: 5000,
            },
        ],
        translateY: [
            {
                value: Math.ceil(Math.random() * 400 + 10) + 10,
                duration: 5000,
            },
            {
                value: Math.ceil(Math.random() * 400 + 10) + 10,
                duration: 5000,
            },
        ],
        delay: anime.stagger(1500, { grid: [1, 9], from: "center" }),
        endDelay: 300,
        direction: "alternate",
        loop: true,
        autoplay: false,
    });

    let x = 0,
        y = 0;
    let mouseX = 0;
    let mouseY = 0;
    let speed = 0.05;

    for (let i = 1; i < $(".gnb__item").length + 1; i++) {
        nav.push({
            id: i,
            dom: $(`.gnb__item:nth-child(${i})`),
        });
    }

    // 사이즈
    const headerSize = header.header.offsetHeight;
    const aboutSize = about.about.offsetHeight;
    const skillSize = skill.skill.offsetHeight * 2;
    const portfolioSize = portfolio.portfolio.offsetHeight * 3;
    const thankyouSize = portfolio.portfolio.offsetHeight * 3;

    const cloudeRight = [];
    header.cloudes.forEach((item) => {
        cloudeRight.push(item.getBoundingClientRect().right);
    });

    window.addEventListener("scroll", function () {
        let scroll = window.scrollY;

        waterball.forEach((item, index) => {
            item.style.bottom = `${index * 8 + scroll * 0.1}rem`;
        });

        nav.forEach((item) => {
            item.dom.removeClass("gnb--active");
        });

        if (header.toggle) {
            header.text.style.top = `${30 + scroll * +0.04}%`;
            header.land.style.bottom = `${scroll * 0.08}px`;

            header.tree.style.bottom = `${2 + scroll * 0.04}rem`;
            header.tree.style.transform = `translateY(${scroll * 0.04}px)`;
            header.bitchBall.style.transform = `rotate(${scroll * -0.15}deg)`;
            header.bitchBall.style.right = `${2 + scroll * 0.02}rem`;
            navChangeColor(true);

            nav[0].dom.addClass("gnb--active");
        }

        if (about.toggle) {
            navChangeColor(false);
            jelly_animation.pause();
            nav[1].dom.addClass("gnb--active");
        }
        if (skill.toggle) {
            jelly_animation.play();
            skill.jelly.style.top = `${100 + scroll * 0.55}px`;
            nav[2].dom.addClass("gnb--active");
        }
        if (portfolio.toggle) {
            nav[3].dom.addClass("gnb--active");
        }
        if (thankyou.toggle) {
            nav[4].dom.addClass("gnb--active");
        }
        // 토글 상황
        header.toggle = scroll >= headerSize ? false : true;
        about.toggle = scroll >= headerSize * 0.35 ? true : false;
        skill.toggle = scroll >= aboutSize ? true : false;
        portfolio.toggle = scroll >= skillSize ? true : false;
        thankyou.toggle = scroll >= portfolioSize ? true : false;

        // 토글 확인
        about.about.style.opacity = about.toggle ? 1 : 0;
        skill.skill.style.opacity = skill.toggle * 1.5 ? 1 : 0;
        portfolio.portfolio.style.opacity = portfolio.toggle * 1.5 ? 1 : 0;
        thankyou.thankyou.style.opacity = thankyou.toggle ? 1 : 0;

        console.log(`header : ${headerSize}, about : ${aboutSize},
        skill : ${skillSize}, portfolio : ${portfolioSize}, thankyou : ${thankyouSize}
        `);
    });

    function navChangeColor(islogic) {
        const n = islogic ? "black" : "#fcffe9";
        nav.forEach((item) => {
            item.dom.css("color", n);
        });
    }

    window.addEventListener("mousemove", function (e) {
        if (thankyou.toggle) {
            x = e.clientX - window.innerWidth / 2;
            y = e.clientY - window.innerHeight / 2;
        }
    });

    function moveFish() {
        mouseX += (x - mouseX) * speed;
        mouseY += (y - mouseY) * speed;

        if (thankyou.toggle) {
            fish.style.transform = `translate(${-mouseX / 4}px, ${
                -mouseY / 4
            }px) rotate(${mouseX / 4}deg)`;
        }

        requestAnimationFrame(moveFish);
    }

    moveFish();
    navChangeColor(true);
});
