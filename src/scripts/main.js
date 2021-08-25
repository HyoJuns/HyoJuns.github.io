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

    // 포트폴리오 링크
    const $portfolioLink = {
        modal: $(".portfolio__modal"),
        go: $(".modal__go"),
        close: $(".modal__close"),
    };
    // 포트폴리오 목록
    const $portfolioList = $(".portfolio__item");
    // 포트폴리오 내용
    const $portfolioInformation = {
        img: $(".portfolio__choice"),
        title: $(".portfolio__title"),
        desc: $(".portfolio__desc"),
        useskill: $(".portfolio__list"),
    };
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

    // 이동
    $portfolioLink.go.on("click", function () {
        location.href = $portfolioLink.go.attr("href");
    });
    // 취소
    $portfolioLink.close.on("click", function () {
        $portfolioLink.modal.css("width", `0%`);
    });
    // 버튼
    $portfolioList.on("click", function () {
        let url = $(this).children("img").attr("src");
        const type = $(this).attr("data-type");
        // console.log(type);

        // 그림변경
        $portfolioInformation.img.attr("src", `${url}`);
        let msg = [];
        switch (type) {
            case "A":
                msg = ["HTML", "SCSS", "JavaScript, (JQuery X)"];
                $portfolioInformation.title.html(
                    "<strong>01.</strong> 프론트 앤드 멘토 챌린지 프로젝트"
                );
                $portfolioInformation.desc.html(
                    "Frontend Mentor 라는 사이트에서 자기자신이 어느정도 홈페이지를 구현 할 수 있는지를 확인하는 사이트이며, 여기에서 CHALLENGES 라는 메뉴에 들어가면 난이도 별로 어떤 홈페이지를 구현할 건지 종류별로 나와있습니다. 이 홈페이지의 난이도는 LEVEL 3 단계입니다.홈페이지에서 지급되는 이미지, 스타일 가이드 준수하여 작성했습니다."
                );
                $portfolioInformation.useskill.each(function (index, item) {
                    $(item).text(msg[index]);
                });
                $portfolioLink.modal.css("width", "100%");
                $portfolioLink.go.attr(
                    "href",
                    "https://hyojuns.github.io/room-homepage-master/"
                );
                break;
            case "B":
                console.log("B");
                msg = ["HTML", "SCSS", "JavaScript, JQuery"];
                $portfolioLink.modal.css("width", "100%");
                $portfolioInformation.title.html(
                    "<strong>02.</strong> 펜션 카페"
                );
                $portfolioInformation.desc.html(
                    "가장 힘들어 했던 프로젝트이며, Vue 를 이용한 첫 도전인 프로젝트이며, 다시 한동안 보고싶지 않은 사이트 입니다. 가평 행복펜션을 리뉴얼 하였으며, 저에게 아주 많은 공부가 된 작품이기도 합니다."
                );
                $portfolioInformation.useskill.each(function (index, item) {
                    $(item).text(msg[index]);
                });
                $portfolioLink.go.attr(
                    "href",
                    "https://hyojuns.github.io/Rentalcottage-project/"
                );
                break;
            case "C":
                msg = ["HTML", "SCSS", "JavaScript, JQuery"];
                $portfolioInformation.title.html(
                    "<strong>03.</strong> 그라찌에"
                );
                $portfolioLink.modal.css("width", "100%");
                $portfolioInformation.desc.html(
                    "해상도 낮을 때 만든 홈페이지를 재구성 한 프로젝트이며, 추후 바꿀 예정"
                );
                $portfolioInformation.useskill.each(function (index, item) {
                    $(item).text(msg[index]);
                });
                break;
        }
    });

    // 스크롤
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
