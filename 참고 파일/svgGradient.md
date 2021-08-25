# SVG 그레디언트

## Linear Gradient

-   선형 그레디언트를 그려 요소에 매핑 하는 방법은 다음과 같다.
-   `<defs>` 요소 내에 `<linearGradient>` 요소를 정의한 후 `fill` 속성에 참조 연결합니다.
-   `<linearGradient>` 요소 내부에는 `<stop>` 요소를 2개 이상 사용해 그레디언트 컬러 스톱을 설정할 수 있습니다.

```html
<svg>
    <defs>
        <linearGradient id="bl-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00a2ff" />
            <stop offset="100%" stop-color="#004d80" />
        </linearGradient>
    </defs>

    <rect fill="url(#bl-g)" x="0" y="0" width="100" height="100" />
</svg>
```

## Radial Gradient

-   원형 그레디언트를 그려 요소에 매핑하는 방법 또한 선형 그레디언트와 유사하다.
-   다만 `<radialGradient>` 원 중심 `cy ,cx`와 반지름 `r`, 초점 `fx,fy`을 성정하는 점이 다르다.

```html
<svg>
    <defs>
        <radialGradient id="yr-rg" cx="50%" cy="50%" r="50%" fx="20%" fy="20%">
            <stop offset="0%" stop-color="#ffc054" />
            <stop offset="100%" stop-color="#ff614b" />
        </radialGradient>
    </defs>

    <rect fill="url(#yr-rg)" x="0" y="0" width="100" height="100" />
</svg>
```
