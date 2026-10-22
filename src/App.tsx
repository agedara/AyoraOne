import "./App.css";

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <svg className="swirl swirl-a" viewBox="0 0 800 800">
        <g>
          <circle
            cx="400"
            cy="400"
            r="250"
            fill="none"
            stroke="#f07828"
            strokeWidth="22"
            strokeLinecap="round"
            strokeDasharray="280 1300"
          />
          <circle
            cx="400"
            cy="400"
            r="190"
            fill="none"
            stroke="#707070"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray="210 1000"
            transform="rotate(150 400 400)"
          />
          <circle
            cx="400"
            cy="400"
            r="130"
            fill="none"
            stroke="#f07828"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="140 700"
            transform="rotate(40 400 400)"
          />
          <circle
            cx="400"
            cy="400"
            r="78"
            fill="none"
            stroke="#707070"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="70 420"
            transform="rotate(210 400 400)"
          />
        </g>
      </svg>
      <svg className="swirl swirl-b" viewBox="0 0 800 800">
        <g>
          <circle
            cx="400"
            cy="400"
            r="230"
            fill="none"
            stroke="#707070"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="240 1200"
          />
          <circle
            cx="400"
            cy="400"
            r="160"
            fill="none"
            stroke="#f07828"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="160 860"
            transform="rotate(120 400 400)"
          />
          <circle
            cx="400"
            cy="400"
            r="96"
            fill="none"
            stroke="#784020"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="80 520"
            transform="rotate(260 400 400)"
          />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <Backdrop />
      <main className="content">
        <img
          className="logo"
          src="/logo.png"
          alt="AyoraOne. Solutions made simple."
        />
        <p className="kicker">Coming soon</p>
        <h1>The details are almost ready.</h1>
        <p className="lede">
          AyoraOne is a software company. We make tools that keep complicated
          work understandable. This page is up early — the product is next.
        </p>
      </main>
      <footer className="footer">
        <p>© {year} AyoraOne. Solutions made simple.</p>
      </footer>
    </div>
  );
}
