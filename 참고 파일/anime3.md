# Timeline

## Timeline

-   타임라인을 사용하면 여러 애니메이션을 함께 동기화할 수 있습니다.
    기본적으로 타임라인에 추가된 각 애니메이션은 이전 애니메이션이 끝난 후에 시작됩니다.

```javascript
// 타임 라인 정의
var myTimeline = anime.timeline(parameters);

// 추가
myTimeline.add(parameters, offset);

// 예제
var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
});

// Add children
tl.add({
    targets: ".basic-timeline-demo .el.square",
    translateX: 250,
})
    .add({
        targets: ".basic-timeline-demo .el.circle",
        translateX: 250,
    })
    .add({
        targets: ".basic-timeline-demo .el.triangle",
        translateX: 250,
    });
```

## TimeOffset

-   타임라인 .add() 함수를 사용하여 두 번째 선택적 매개변수로 시간 오프셋을 지정할 수 있습니다.
-   타임라인에서 애니메이션이 시작되는 시점을 정의합니다.
-   오프셋을 지정하지 않으면 이전 애니메이션이 끝난 후 애니메이션이 시작됩니다.
-   오프셋은 마지막 애니메이션에 상대적이거나 전체 타임라인에 절대적일 수 있습니다.

```javascript
// Create a timeline with default parameters
var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
});

tl.add({
    targets: ".offsets-demo .el.square",
    translateX: 250,
})
    .add(
        {
            targets: ".offsets-demo .el.circle",
            translateX: 250,
        },
        "-=600"
    ) // 상대적 오프셋
    // 이전 애니메이션 끝나기 600ms 전에 시작
    .add(
        {
            targets: ".offsets-demo .el.triangle",
            translateX: 250,
        },
        400
    ); // absolute offset
// 타임라인의 애니메이션 위치에 관계없이 400ms에서 시작
```

## 매개변수 상속

-   상위 타임라인 인스턴스에 설정된 일부 매개변수는 모든 하위에 상속될 수 있습니다.

```javascript
var tl = anime.timeline({
    targets: ".params-inheritance-demo .el",
    delay: function (el, i) {
        return i * 200;
    },
    duration: 500, // 상속이 가능하다
    easing: "easeOutExpo", // 상속이 가능하다
    direction: "alternate", // 상속이 불가능하다
    loop: true, // 상속이 불가능하다
});

tl.add({
    translateX: 250,
    // 타이밍 매개변수 재정의
    easing: "spring",
})
    .add({
        opacity: 0.5,
        scale: 2,
    })
    .add({
        // 대상 매개변수 재정의
        targets: ".params-inheritance-demo .el.triangle",
        rotate: 180,
    })
    .add({
        translateX: 0,
        scale: 1,
    });
```
