import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        {...props}
    >
        <path
            fill="#A7A7A7"
            d="M6 6.75A1.875 1.875 0 1 1 6 3a1.875 1.875 0 0 1 0 3.75Zm0-3A1.125 1.125 0 1 0 6 6a1.125 1.125 0 0 0 0-2.25Z"
        />
        <path
            fill="#A7A7A7"
            d="M6 11.25 2.837 7.52a13.27 13.27 0 0 1-.131-.17 4.083 4.083 0 0 1-.831-2.475 4.125 4.125 0 0 1 8.25 0 4.082 4.082 0 0 1-.83 2.474l-.001.001s-.113.148-.13.168L6 11.25ZM3.304 6.898c.001 0 .088.116.108.14L6 10.091l2.591-3.057c.017-.02.104-.137.105-.137a3.34 3.34 0 0 0 .679-2.022 3.375 3.375 0 0 0-6.75 0c0 .73.238 1.441.68 2.023Z"
        />
    </svg>
)
export const LocationIcon = memo(SvgComponent)
