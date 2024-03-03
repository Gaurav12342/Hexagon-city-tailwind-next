import React from "react";

const Border = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1630"
      height="20"
      viewBox="0 0 1279 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.6"
        d="M0 0.497559H597.476L639.207 19.2171L639.488 19.3357L681.524 0.497559H1279"
        stroke="url(#paint0_linear_222_378)"
        stroke-miterlimit="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_378"
          x1="0"
          y1="19.3377"
          x2="1279"
          y2="19.3377"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="0.085" stop-color="#DE00FF" />
          <stop offset="0.515" stop-color="#0085FF" />
          <stop offset="0.925" stop-color="#FF0099" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Border;
