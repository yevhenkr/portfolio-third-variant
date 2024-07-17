import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={8}
        height={10}
        fill="none"
        {...props}
    >
        <path
            fill="#A7A7A7"
            d="M.5.5v9h3V7.75h1V9.5h3v-9h-7Zm1 1h1v1h-1v-1Zm2 0h1v1h-1v-1Zm2 0h1v1h-1v-1Zm-4 2h1v1h-1v-1Zm2 0h1v1h-1v-1Zm2 0h1v1h-1v-1Zm-4 2h1v1h-1v-1Zm2 0h1v1h-1v-1Zm2 0h1v1h-1v-1Zm-4 2h1v1h-1v-1Zm4 0h1v1h-1v-1Z"
        />
    </svg>
)
export const HouseIcon = memo(SvgComponent)
