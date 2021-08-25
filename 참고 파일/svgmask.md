# SVG Mask

## 이미지 마스크

-   <defs> 내부에 <mask> 요소를 선언하고, 식별 가능한 `id` 속성을 부여합니다.
-   <image> 요소 mask 속성 값으로 `url()` 함수를 사용해 마스크 ID를 설정하면 마스킹 된 이미지가 화면에 렌더링 됩니다.
-   주의할 점은 마스크는 Alpha Channel 사용하므로 **하얀색**일 경우에는 **Opacity 100%**와 같으며,**검정색**일 경우 **Opacity 0%**와 같습니다.

```html
    <svg>
        <defs>
            <mask id="photo-mask">
                <polygon fill="#fff" points="101.9, 159.4 ..."/>
            </mask>
        </defs>

        <image mask="url('photo-mask')" xlink:href="./image/photo.jpg" x="20" y="20" width="200" height="400">
    </svg>
```

## 그라데이션 마스크

-   부드럽게 하기

```html
<svg width="512" height="702" viewBox="0 0 512 702">
    <defs>
        <radialGradient
            id="mask-gradient"
            cx="322.6659"
            cy="142.8694"
            r="194.3122"
            gradientTransform="matrix(-0.8815 0.4721 -0.3648 -0.6812 659.2268 87.8449)"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset="0" style="stop-color:#ffffff" />
            <stop offset="6.693518e-02" style="stop-color:#ececec" />
            <stop offset="0.5344" style="stop-color:#6f6f6f" />
            <stop offset="0.8543" style="stop-color:#1f1f1f" />
            <stop offset="1" style="stop-color:#000000" />
        </radialGradient>
        <mask id="mask">
            <polygon
                fill="url(#mask-gradient)"
                points="195.6,14.7 135.7,254.6 358.7,299.3 398.3,183.2 398.3,84"
            />
        </mask>
    </defs>

    <image
        mask="url(#mask)"
        xlink:href="https://images.unsplash.com/photo-1523364583621-23af08364dc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ac7c82c76e28433baafbb49deeb4e5&auto=format&fit=crop&w=500&q=60"
        aria-label="산을 바라보는 조깅하는 사람의 뒷모습"
    />
</svg>
```

## 텍스트 마스크

-   텍스트에 이미지를 마스킹 하는 방법
-   알파 채널로 사용할 이미지를 설정하고 텍스트 요소에 `mask` 속성을 설정해 이미지를 마스킹 처리 합니다.
-   이미지는 알파 채널로 사용되었기 때문에 흑백으로 표현된다.

```html
<svg width="512" height="702" viewBox="0 0 512 702">
    <defs>
        <mask id="mask">
            <image
                xlink:href="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d469edc4fc24e0c17c0144146a777f51&auto=format&fit=crop&w=500&q=50"
            />
        </mask>
    </defs>

    <text
        mask="url(#mask)"
        x="0"
        y="250"
        font-size="100"
        font-family="Arial"
        font-weight="bold"
    >
        AOA 2018
    </text>
</svg>
```
