import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={113}
        height={101}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#00D8FF"
                d="M92.906 32.703a75.63 75.63 0 0 0-3.637-1.15c.205-.842.394-1.674.561-2.49 2.754-13.415.954-24.221-5.194-27.78-5.894-3.41-15.534.146-25.27 8.65a75.77 75.77 0 0 0-2.814 2.591 68.806 68.806 0 0 0-1.872-1.735C44.477 1.696 34.25-2.136 28.108 1.432c-5.89 3.422-7.633 13.58-5.154 26.293a75.13 75.13 0 0 0 .835 3.757 74.777 74.777 0 0 0-4.182 1.32C7.644 36.988.005 43.548.005 50.352c0 7.029 8.201 14.078 20.661 18.352a63.96 63.96 0 0 0 3.055.96c-.334 1.34-.63 2.69-.887 4.047-2.363 12.493-.518 22.411 5.355 25.811 6.066 3.511 16.248-.097 26.161-8.795a64.361 64.361 0 0 0 2.358-2.181c.992.96 2.01 1.893 3.055 2.797 9.603 8.293 19.087 11.642 24.955 8.233 6.06-3.521 8.03-14.176 5.473-27.14a64.56 64.56 0 0 0-.678-3.031 68.31 68.31 0 0 0 2.101-.66c12.953-4.307 21.381-11.27 21.381-18.392 0-6.83-7.886-13.434-20.09-17.65Zm-2.81 31.444c-.618.206-1.252.403-1.898.596-1.43-4.543-3.36-9.375-5.721-14.367 2.253-4.872 4.109-9.642 5.499-14.156a71.83 71.83 0 0 1 3.359 1.063c10.456 3.613 16.833 8.954 16.833 13.07 0 4.384-6.888 10.075-18.072 13.794Zm-4.64 9.23c1.13 5.732 1.291 10.915.543 14.967-.673 3.64-2.026 6.068-3.7 7.04-3.56 2.069-11.176-.62-19.388-7.713a69.097 69.097 0 0 1-2.841-2.6c3.184-3.495 6.366-7.558 9.471-12.07 5.463-.487 10.623-1.282 15.303-2.368.225.91.43 1.824.612 2.743Zm-46.93 21.65c-3.48 1.232-6.25 1.268-7.925.298-3.564-2.063-5.046-10.027-3.025-20.71.24-1.262.515-2.518.825-3.765 4.628 1.028 9.751 1.767 15.226 2.212 3.127 4.416 6.4 8.474 9.7 12.027a59.616 59.616 0 0 1-2.153 1.99c-4.384 3.846-8.777 6.575-12.648 7.947ZM22.228 64.12c-5.51-1.89-10.06-4.346-13.179-7.027-2.803-2.408-4.217-4.8-4.217-6.74 0-4.13 6.134-9.397 16.364-12.976a69.785 69.785 0 0 1 3.89-1.229c1.414 4.616 3.268 9.442 5.506 14.323-2.267 4.952-4.148 9.856-5.576 14.526a59.217 59.217 0 0 1-2.788-.877Zm5.463-37.325c-2.124-10.892-.713-19.108 2.836-21.17 3.78-2.196 12.138.935 20.948 8.787.575.513 1.14 1.036 1.696 1.57-3.283 3.538-6.527 7.566-9.626 11.955-5.314.494-10.4 1.288-15.077 2.352a71.123 71.123 0 0 1-.777-3.494ZM76.43 38.874a154.15 154.15 0 0 0-3.436-5.672c3.605.458 7.06 1.065 10.303 1.808-.974 3.133-2.188 6.407-3.616 9.765a169.037 169.037 0 0 0-3.251-5.901Zm-19.876-19.43c2.227 2.421 4.456 5.124 6.65 8.056a141.62 141.62 0 0 0-13.355-.002 106.8 106.8 0 0 1 6.705-8.054ZM36.551 38.907a143.402 143.402 0 0 0-3.19 5.864 107.16 107.16 0 0 1-3.59-9.813 108.66 108.66 0 0 1 10.244-1.764 142.554 142.554 0 0 0-3.464 5.713Zm3.567 28.95c-3.701-.415-7.19-.976-10.414-1.68a108.714 108.714 0 0 1 3.663-10.012 142.501 142.501 0 0 0 6.75 11.692Zm16.57 13.746a108.547 108.547 0 0 1-6.799-8.166c2.164.085 4.37.129 6.611.129 2.303 0 4.58-.052 6.82-.152-2.2 3-4.421 5.745-6.633 8.189ZM79.725 55.99c1.51 3.455 2.783 6.797 3.794 9.976-3.276.75-6.813 1.354-10.54 1.803 1.194-1.9 2.351-3.824 3.469-5.77a154.141 154.141 0 0 0 3.277-6.01Zm-7.458 3.588a158.937 158.937 0 0 1-5.42 8.778c-3.444.245-6.896.366-10.348.365-3.516 0-6.937-.11-10.23-.325a137.495 137.495 0 0 1-5.523-8.791 136.325 136.325 0 0 1-4.82-9.138 137.62 137.62 0 0 1 4.806-9.141 136.196 136.196 0 0 1 5.478-8.754 136.13 136.13 0 0 1 10.288-.388h.001c3.498 0 6.948.134 10.308.392a145.955 145.955 0 0 1 5.444 8.724 159.036 159.036 0 0 1 4.871 9.099 146.19 146.19 0 0 1-4.855 9.18ZM82.224 5.48c3.784 2.19 5.255 11.021 2.878 22.603a64.934 64.934 0 0 1-.508 2.255c-4.688-1.086-9.778-1.894-15.108-2.396-3.104-4.437-6.321-8.471-9.551-11.964a71.145 71.145 0 0 1 2.599-2.392C70.876 6.3 78.672 3.424 82.224 5.48ZM56.5 40.226c5.572 0 10.09 4.534 10.09 10.127 0 5.593-4.518 10.127-10.09 10.127s-10.09-4.534-10.09-10.127c0-5.593 4.518-10.127 10.09-10.127Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h113v101H0z"/>
            </clipPath>
        </defs>
    </svg>
);

export const ReactIcon = memo(SvgComponent);
