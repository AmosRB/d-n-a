export default function ConstSvgAnimation() {
  return (
    <svg
      viewBox="0 0 500 100"
      width="100%"
      height="100"
      className="block"
    >
      <style>
        {`
          .letter {
            font: bold 40px monospace;
            dominant-baseline: middle;
            animation: float 3s infinite ease-in-out;
          }

          .c { fill: #f92672; animation-delay: 0s; }
          .o { fill: #66d9ef; animation-delay: 0.2s; }
          .n { fill: #a6e22e; animation-delay: 0.4s; }
          .s { fill: #fd971f; animation-delay: 0.6s; }
          .t { fill: #e6db74; animation-delay: 0.8s; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      <text x="10" y="50" className="letter c">c</text>
      <text x="60" y="50" className="letter o">o</text>
      <text x="110" y="50" className="letter n">n</text>
      <text x="160" y="50" className="letter s">s</text>
      <text x="210" y="50" className="letter t">t</text>
    </svg>
  );
}
