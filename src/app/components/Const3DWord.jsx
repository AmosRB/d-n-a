export default function Const3DWord() {
  const letters = [
    { char: 'c', front: '#f26b7a', shadow: '#832840' },
    { char: 'o', front: '#6fc5f2', shadow: '#1e3f5c' },
    { char: 'n', front: '#f0a947', shadow: '#a65b0d' },
    { char: 's', front: '#7ac96e', shadow: '#275a1b' },
    { char: 't', front: '#f26bb7', shadow: '#82285d' }
  ];

  return (
    <div className="flex gap-4 p-4 bg-[#0b0c1a] rounded-xl">
      {letters.map((l, i) => (
        <span key={i} className="relative inline-block text-[64px] font-extrabold leading-none">
          {/* שכבת צל אחורית (עובי) */}
          <span
            className="absolute left-1 top-1 -z-10"
            style={{ color: l.shadow }}
          >
            {l.char}
          </span>
          {/* שכבת צבע קדמית */}
          <span style={{ color: l.front }}>{l.char}</span>
        </span>
      ))}
    </div>
  );
}

