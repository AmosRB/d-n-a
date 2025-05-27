
"use client";

import "./ConstMetadata3DWord.css";

export default function ConstMetadata3DWord() {
  const letters = [
    ...[
      { char: 'c', front: '#f26b7a', shadow: '#832840', delay: '0s' },
      { char: 'o', front: '#6fc5f2', shadow: '#1e3f5c', delay: '0.1s' },
      { char: 'n', front: '#f0a947', shadow: '#a65b0d', delay: '0.2s' },
      { char: 's', front: '#7ac96e', shadow: '#275a1b', delay: '0.3s' },
      { char: 't', front: '#f26bb7', shadow: '#82285d', delay: '0.4s' },
      { char: ' ', front: 'transparent', shadow: 'transparent', delay: '0.5s' },
      { char: 'm', front: '#6fc5f2', shadow: '#1e3f5c', delay: '0.6s' },
      { char: 'e', front: '#f92672', shadow: '#6b0022', delay: '0.7s' },
      { char: 't', front: '#ffd866', shadow: '#8a6d00', delay: '0.8s' },
      { char: 'a', front: '#ab9df2', shadow: '#3f2b88', delay: '0.9s' },
      { char: 'd', front: '#fc9867', shadow: '#7a3c00', delay: '1.0s' },
      { char: 'a', front: '#a6e22e', shadow: '#4e6b1f', delay: '1.1s' },
      { char: 't', front: '#f8f8f2', shadow: '#888888', delay: '1.2s' },
      { char: 'a', front: '#f92672', shadow: '#5a0020', delay: '1.3s' }
    ]
  ];

  return (
    <div className="const3d-wrapper">
      {letters.map((l, i) => (
        <div key={i} className="const3d-letter" style={{ animationDelay: l.delay }}>
          <span className="const3d-shadow" style={{ color: l.shadow }}>{l.char}</span>
          <span className="const3d-front" style={{ color: l.front }}>{l.char}</span>
        </div>
      ))}
    </div>
  );
}
