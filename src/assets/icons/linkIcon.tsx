import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={19}
        fill="none"
        {...props}
    >
        <g
            stroke={props.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            filter="url(#a)"
        >
            <path d="M11.286 7.713a3.64 3.64 0 0 0-5.146 0l-2.574 2.574a3.64 3.64 0 1 0 5.147 5.147L10 14.148"/>
            <path d="M8.713 10.287a3.64 3.64 0 0 0 5.147 0l2.574-2.574a3.64 3.64 0 1 0-5.148-5.147L10 3.853"/>
        </g>
        <defs>
            <filter
                id="a"
                width={24.667}
                height={24.667}
                x={-2.334}
                y={0.666}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4}/>
                <feGaussianBlur stdDeviation={2}/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4537_851"
                />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4537_851"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);

export const LinkIcon = memo(SvgComponent);
