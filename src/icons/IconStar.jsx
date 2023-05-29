import * as React from "react";

function IconStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 14.5l-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
      />
    </svg>
  );
}

export default IconStar;