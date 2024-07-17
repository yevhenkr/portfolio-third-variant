import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={120}
        height={120}
        fill="none"
        {...props}
    >
        <path
            fill="#E44F26"
            d="M22.132 102.004 13.706 7.5h92.588l-8.438 94.489L59.944 112.5l-37.812-10.496Z"
        />
        <path fill="#F1662A" d="m60 104.468 30.638-8.494 7.207-80.745H60v89.239Z" />
        <path
            fill="#EBEBEB"
            d="M60 50.276H44.663l-1.058-11.869H60v-11.59H30.937l.278 3.112 2.846 31.939H60V50.276Zm0 30.101-.053.016-12.907-3.484-.825-9.244H34.579l1.623 18.195 23.745 6.593.053-.016v-12.06Z"
        />
        <path
            fill="#fff"
            d="M59.959 50.276v11.591h14.272L72.89 76.901l-12.93 3.488v12.06l23.764-6.589.172-1.957 2.723-30.514.285-3.113H59.959Zm0-23.46v11.591h27.998l.232-2.602.529-5.876.277-3.113H59.96Z"
        />
    </svg>
);

export const HTMLIcon = memo(SvgComponent);
