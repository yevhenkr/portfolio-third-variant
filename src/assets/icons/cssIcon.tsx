import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={94}
        height={105}
        fill="none"
        {...props}
    >
        <path
            fill="#1572B6"
            d="M9.132 94.154.71.438h92.58l-8.434 93.7-37.912 10.424L9.132 94.154Z"
        />
        <path fill="#33A9DC" d="m47 96.597 30.638-8.423 7.207-80.072H47v88.495Z"/>
        <path
            fill="#fff"
            d="M47 42.054h15.337l1.058-11.77H47V18.79h29.063l-3.124 34.759H47V42.054Z"
        />
        <path
            fill="#EBEBEB"
            d="m47.071 71.904-.052.015-12.908-3.458-.825-9.167H21.65l1.624 18.047 23.741 6.538.056-.015v-11.96Z"
        />
        <path
            fill="#fff"
            d="m61.351 53.062-1.395 15.391-12.926 3.459v11.96l23.76-6.53 2.19-24.28H61.351Z"
        />
        <path
            fill="#EBEBEB"
            d="M47.041 18.79v11.494H19.044L18.005 18.79h29.036ZM47 42.053v11.495H34.254l-1.035-11.495H47Z"
        />
    </svg>
);

export const CSSIcon = memo(SvgComponent);
