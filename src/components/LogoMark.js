export default function LogoMark({ height = 52 }) {
  return (
    <svg
      viewBox="-5 -8 220 238"
      style={{ height: `${height}px`, width: "auto", display: "block", flexShrink: 0 }}
      aria-label="Allied Green Energy"
      role="img"
    >
      {/* Blue swoosh — top */}
      <path
        d="M8,62 C52,8 150,6 200,40"
        stroke="#1E62CC"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />

      {/* ALLIED */}
      <text
        x="105"
        y="110"
        textAnchor="middle"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="56"
        fill="#1E62CC"
      >
        ALLIED
      </text>

      {/* GREEN */}
      <text
        x="10"
        y="152"
        textAnchor="start"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="46"
        fill="#3DB84A"
      >
        GREEN
      </text>

      {/* ENERGY */}
      <text
        x="10"
        y="194"
        textAnchor="start"
        fontFamily="'Barlow Condensed', 'Arial Narrow', sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="46"
        fill="#3DB84A"
      >
        ENERGY
      </text>

      {/* Green swoosh — bottom */}
      <path
        d="M46,196 C88,222 162,220 202,194"
        stroke="#3DB84A"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
