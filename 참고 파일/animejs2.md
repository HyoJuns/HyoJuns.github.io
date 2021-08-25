# AnimeJS 속성 매개 변수

## PROPERTY PARAMETERS

**속성 매개 변수**

### duration

-   애니메이션의 지속 시간을 밀리초 단위로 정의한다.

```javascript
anime({
    targets: ".duration-demo .el",
    translateX: 250,
    duration: 3000,
});
// 3초 동안 x(250) 만큼 이동한다.
```

### delay

-   애니메이션 지연 시간을 밀리초 단위로 정의한다.

```javascript
anime({
    targets: ".delay-demo .el",
    translateX: 250,
    delay: 1000,
});

// 1 초 후에 실행한다.
```

### enddelay

-   끝난 후 지연 시간을 밀리초 단위로 정의한다.

```javascript
anime({
    targets: ".end-delay-demo .el",
    translateX: 250,
    endDelay: 1000,
    direction: "alternate",
});
// 애니메이션 작동 후 1초 간 대기한다.
```

### easing

-   애니메이션의 타이밍 기능을 정의합니다.

```javascript
anime({
  targets: '.linear-easing-demo .el',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'linear'
});

var easingNames = [
  'easeInQuad',
  'easeInCubic',
  'easeInQuart',
  'easeInQuint',
  'easeInSine',
  'easeInExpo',
  'easeInCirc',
  'easeInBack',
  'easeOutQuad',
  'easeOutCubic',
  'easeOutQuart',
  'easeOutQuint',
  'easeOutSine',
  'easeOutExpo',
  'easeOutCirc',
  'easeOutBack',
  'easeInBounce',
  'easeInOutQuad',
  'easeInOutCubic',
  'easeInOutQuart',
  'easeInOutQuint',
  'easeInOutSine',
  'easeInOutExpo',
  'easeInOutCirc',
  'easeInOutBack',
  'easeInOutBounce',
  'easeOutBounce',
  'easeOutInQuad',
  'easeOutInCubic',
  'easeOutInQuart',
  'easeOutInQuint',
  'easeOutInSine',
  'easeOutInExpo',
  'easeOutInCirc',
  'easeOutInBack',
  'easeOutInBounce',
]

easing: 'cubicBezier(.5, .05, .1, .3)'
easing: 'spring(1, 80, 10, 0)'
easing: 'easeOutElastic(1, .6)'
easing: 'steps(5)'
easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
```
