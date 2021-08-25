# Anime JS 라이브러리 사용

## 타켓 요소 명시

-   Anime.js 를 이용해 애니메이션을 제작하려면, `anime()` 함수를 호출하고 그 중에서도 애니메이션 하려는 타깃 엘리먼트와 프로퍼티를 명시할 key-value 쌍으로 함수를 오브젝트에 넘겨주어야 한다.

### CSS 선택자

```javascript
let blue = anime({
    targets: ".blue",
    translateY: 200,
});

let redBlue = anime({
    targets: ".red, .blue",
    translateY: 200,
});

let even = anime({
    targets: ".square:nth-child(even)",
    translateY: 300,
});
```

### DOM 노드 선택

```javascript
let special = anime({
    targets: document.getElementById("special"),
    translateY: 200,
});

var blue = anime({
    targets: document.querySelector(".blue"),
    translateY: 200,
});
```

-   DOM Node나 NodeList를 받은 함수는 Anime.js에서 `targets` key 값을 설정하는 데 사용할 수 있다.

### Object 선택

```javascript
var logEl = document.querySelector(".battery-log");

var battery = {
    charged: "0%",
    cycles: 120,
};

anime({
    targets: battery,
    charged: "100%",
    cycles: 130,
    round: 1,
    easing: "linear",
    update: function () {
        logEl.innerHTML = JSON.stringify(battery);
    },
});
```

-   위 코드에서 스캔된 파일 수를 0~1000까지, 전염된 파일 수를 0~8까지 애니메이션 합니다.
-   이런 식으로 숫자 값으로만 할 수 있으며 <span style="color:red">영어로 하면 에러가 </span>난다.
-   또한 애니메이션이 진행되는 동안 모든 프레임에서 호출되는 update 키에 관한 콜백 함수를 사용했다.
-   여기에서 스캔과 전염된 파일의 수를 업데이트 하는데 사용한 것이다.

### Array 선택

-   여러 요소들을 애니메이션 해야 할 때 배열로 명시합니다.

```javascript
let multipleAnimation = anime({
    targets: [document.querySelectorAll(".blue"), ".red, #special"],
    translateY: 250,
});
```
