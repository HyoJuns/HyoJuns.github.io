# 클립 패스

## 클립패스

-   클리핑 처리할 요소 `clip-path` 속성에 `<clipPath>` 요소 ID를 참조하면 클리핑 처리가 됩니다.
-   `<clipPath>` 요소 내부에는 자를 모양의 도형 요소를 삽입합니다.

```html
<svg width="512" height="702" viewBox="0 0 512 702">
    <!-- 클립패스 요소 -->
    <clipPath id="clippath">
        <circle cx="150" cy="150" r="150" />
    </clipPath>

    <!-- 클립 패스 처리된 텍스트 -->
    <text
        clip-path="url(#clippath)"
        font-size="100"
        font-family="Arial"
        font-weight="bold"
        x="0"
        y="250"
    >
        AOA 2018
    </text>

    <!-- 가이드 텍스트 -->
    <text
        opacity="0.1"
        font-size="100"
        font-family="Arial"
        font-weight="bold"
        x="0"
        y="250"
    >
        AOA 2018
    </text>
</svg>
```
