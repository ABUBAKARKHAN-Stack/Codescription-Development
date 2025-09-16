const WebSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 619"
    role="img"
    className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[380px] xl:w-[500px] 2xl:w-[550px] h-auto"
  >
    <g transform="translate(-560 -231)">
      {/* Base shadow line */}
      <path
        d="M15.18,488.765a1.456,1.456,0,0,0,1.308,1.575H668.472a1.6,1.6,0,0,0,0-3.15H16.488a1.456,1.456,0,0,0-1.308,1.575Z"
        transform="translate(621.678 359.527)"
        fill="#d6d6e3"
        opacity="0.4"
      />
      {/* Stand / danda */}
      <path
        d="M353.105,370.945a27.478,27.478,0,0,1-54.387,0H229.146V524.776H422.677V370.945H353.105Z"
        transform="translate(634.09 321.941)"
        fill="#a78bfa"
        opacity="0.7"
      />

      {/* Outer Frame */}
      <path
        d="M789.214,487.736H10.789A10.8,10.8,0,0,1,0,476.947V32.7A10.8,10.8,0,0,1,10.789,21.911H789.214A10.8,10.8,0,0,1,800,32.7V476.947a10.8,10.8,0,0,1-10.789,10.789Z"
        transform="translate(560 209.089)"
        className="fill-transparent stroke-purple-400/30"
        strokeWidth="2"
      />

      {/* Sidebar */}
      <rect
        width="108"
        height="360"
        rx="4"
        transform="translate(609 273)"
        className="fill-purple-400/10 stroke-purple-500/40"
        strokeWidth="1.5"
      />

      {/* Sidebar items */}
      <rect
        width="80"
        height="16"
        rx="8"
        transform="translate(623 320)"
        className="fill-purple-300/60"
      />
      {[344, 368, 392, 416].map((y, i) => (
        <rect
          key={i}
          width="80"
          height="16"
          rx="8"
          transform={`translate(623 ${y})`}
          className="fill-purple-200/20"
        />
      ))}

      {/* Dashboard cards */}
      <rect
        width="160"
        height="88"
        rx="8"
        transform="translate(750 311)"
        className="fill-purple-400/20 stroke-purple-500/50"
        strokeWidth="1.5"
      />
      <rect
        width="160"
        height="88"
        rx="8"
        transform="translate(934 311)"
        className="fill-purple-400/20 stroke-purple-500/50"
        strokeWidth="1.5"
      />
      <rect
        width="160"
        height="88"
        rx="8"
        transform="translate(1118 311)"
        className="fill-purple-400/20 stroke-purple-500/50"
        strokeWidth="1.5"
      />

      {/* Content bars */}
      <rect
        width="528"
        height="66"
        rx="16"
        transform="translate(750 411)"
        className="fill-purple-500/40"
      />
      <rect
        width="528"
        height="66"
        rx="16"
        transform="translate(750 489)"
        className="fill-purple-500/40"
      />
      <rect
        width="528"
        height="66"
        rx="16"
        transform="translate(750 567)"
        className="fill-purple-500/40"
      />

      {/* Small Buttons */}
      <path
        d="M6,0H26a6,6,0,0,1,6,6v4a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z"
        transform="translate(647 288)"
        className="fill-white/70"
      />
      <path
        d="M4,0H76a4,4,0,0,1,4,4v8a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
        transform="translate(623 601)"
        className="fill-white/70"
      />
      <path
        d="M4,0H76a4,4,0,0,1,4,4v8a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
        transform="translate(750 273)"
        className="fill-purple-200/40"
      />
      <path
        d="M4,0H76a4,4,0,0,1,4,4v8a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
        transform="translate(1198 273)"
        className="fill-purple-400/70"
      />
    </g>
  </svg>
);

export default WebSvg;
