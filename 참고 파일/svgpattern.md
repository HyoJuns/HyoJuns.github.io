# SVG 패턴

## 도형 패턴

-   패턴을 적용하고자 하는 요소 `fill` 속성에 패턴 요소의 <b>ID</b>를 참조합니다.

```html
<svg>
    <defs>
        <pattern id="pattern">
            <line x1="0" y1="0" x2="30" y2="30" class="ptrn1" />
            <line x1="0" y1="30" x2="30" y2="0" class="ptrn2" />
        </pattern>
    </defs>

    <rect fill="url(#pattern)" x="150" y="150" width="300" height="300" />
</svg>
```

## 패턴 재사용

```html
<svg>
    <defs>
        <pattern id="cross-pattern">...</pattern>
        <rect id="ptrn" fill="url(#cross-pattern)" />
    </defs>

    <use xlink:href="#ptrn" x="10" y="10" />
    <use xlink:href="#ptrn" x="120" y="120" />
</svg>
```

## 텍스트 패턴

-   텍스트에 패턴을 매핑하는 방법도 도형 패턴과 유사합니다.

```html
<svg>
    <defs>
        <pattern id="pattern">
            <line x1="0" y1="0" x2="30" y2="30" class="ptrn1" />
            <line x1="0" y1="30" x2="30" y2="0" class="ptrn2" />
        </pattern>
    </defs>

    <text fill="url(#text-pattern)">SVG</text>
</svg>
```

## 텍스트 패턴 + 마스트

-   패턴이 매핑 된 테그슽에 마스크 처리 또한 가능하다.
-   `fill` 속성에 마스크는 `mask` 속성에 참조 연결한다.

```html
<svg>
    <defs>
        <pattern id="text-pattern">...</pattern>
        <mask id="text-mask"></mask>
    </defs>

    <text fill="url(#text-pattern)" mask="url(#text-mask)">SVG</text>
</svg>
```

## Gooey Effect

```html
.blobs .blob A .blob B .blob C //
------------------------------------------------------- // SVG 필터 : Gooey //
------------------------------------------------------- // Gooey 필터 - 컬러
매트릭스 값 // ------------------------- // | R | G | B | A | + //
---|--------------------- // R | 1 | 0 | 0 | 0 | 0 // ---|---------------------
// G | 0 | 1 | 0 | 0 | 0 // ---|--------------------- // B | 0 | 0 | 1 | 0 | 0
// ---|--------------------- // A | 0 | 0 | 0 | 18 | -7 //
---|--------------------- svg filter#gooey feGaussianBlur( in="SourceGraphic"
stdDeviation="10" result="blur" ) feColorMatrix( in="blur" mode="matrix"
values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" result="gooey" ) feComposite(
in="SourceGraphic" in2="gooey" operator="atop" ) // feBlend( //
in="SourceGraphic" // in2="gooey" // )
```

-   SASS

```sass
=flex-center
  display: flex
  justify-content: center
  align-items: center

=position-center-middle($w, $h)
  position: absolute
  top: 50%
  left: 50%
  margin:
    left: -$w/2
    top: -$h/2

=ellipse($w, $h, $bg: #000, $fg: #fff)
  width: $w
  height: $h
  background: $bg
  color: $fg
  // border-radius: #{$w/2}/#{$h/2}

// ---------------------------------

body
  +flex-center
  min-height: 100vh
  margin: 0

.blobs
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  // Gooey 필터는 컨테이너에 적용합니다.
  filter: url("#gooey")

// ---------------------------------

$width: 80px
$height: 80px
$color: #107bb0

.blob
  +flex-center
  +position-center-middle($width, $height)
  +ellipse($width, $height, $color)
  font-size: 20px
  font-weight: 700

  &:nth-child(1)
    // background: #a00
    animation: blob-left-anim 2s 0s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite alternate
  &:nth-child(2)
    // background: #0a0
  &:nth-child(3)
    // background: #00a
    animation: blob-right-anim 2s 1s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite alternate

// ---------------------------------

@keyframes blob-left-anim
  0%
    transform: scale(1, 1) translateX(0)
  50%
    transform: scale(0.9, 0.9) translateX(-$width/2 - 80)
  100%
    transform: scale(0.9, 0.9) translateX(-$width/2 - 80)

@keyframes blob-right-anim
  0%
    transform: scale(1, 1) translateX(0)
  80%
    transform: scale(0.9, 0.9) translateX($width/2 + 80)
  100%
    transform: scale(0.9, 0.9) translateX($width/2 + 80)
```
