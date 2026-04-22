// Variation A — POSTER MANIFESTO
// Huge Extended display type, red stamp, full-bleed hero, dense rules.
// Responsive: scales from mobile -> desktop with clamp()-driven type.

function VariationA() {
  return (
    <div className="ukd-root va" style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100%' }}>
      <style>{`
        .va { --gut: calc(24px * var(--density)); --block: calc(72px * var(--density)); }
        .va .wrap { padding: 0 var(--gut); }
        .va .top { display: flex; justify-content: space-between; align-items: center; padding: 18px var(--gut); border-bottom: 1.5px solid var(--rule); font-size: 12px; letter-spacing: 0.04em; }
        .va .top .dot { display: inline-block; width: 9px; height: 9px; background: var(--accent); margin-right: 8px; vertical-align: 1px; }
        .va .top nav { display: flex; gap: 22px; }
        .va .top nav a:hover { color: var(--accent); }

        .va .hero { padding: calc(40px * var(--density)) var(--gut) calc(32px * var(--density)); border-bottom: 1.5px solid var(--rule); position: relative; overflow: hidden; }
        .va .hero .kicker { display: flex; justify-content: space-between; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: calc(28px * var(--density)); }
        .va .hero h1.display { font-size: clamp(54px, 14.5vw, 240px); text-transform: uppercase; }
        .va .hero h1 .red { color: var(--accent); }
        .va .hero h1 .strike { text-decoration: line-through; text-decoration-thickness: 0.06em; }
        .va .hero .sub { display: grid; grid-template-columns: 1fr auto; gap: calc(24px * var(--density)); align-items: end; margin-top: calc(28px * var(--density)); padding-top: calc(20px * var(--density)); border-top: 1.5px solid var(--rule); }
        .va .hero .sub p { max-width: 52ch; font-size: clamp(15px, 1.25vw, 19px); line-height: 1.35; }
        .va .hero .cta { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: var(--bg); padding: 16px 22px; font-weight: 900; letter-spacing: 0.02em; text-transform: uppercase; font-size: 15px; }
        .va .hero .cta:hover { background: var(--fg); }
        .va .stamp { position: absolute; top: calc(20px * var(--density)); right: var(--gut); border: 2px solid var(--accent); color: var(--accent); padding: 10px 14px; font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.08em; transform: rotate(-6deg); text-align: center; line-height: 1.1; }
        .va .stamp span { display: block; font-size: 10px; font-weight: 500; letter-spacing: 0.14em; opacity: .85; }

        .va .tick { display: flex; gap: 0; overflow: hidden; border-bottom: 1.5px solid var(--rule); background: var(--fg); color: var(--bg); padding: 10px 0; }
        .va .tick .track { display: flex; gap: 48px; white-space: nowrap; animation: va-tick 40s linear infinite; font-family: var(--display); font-weight: 900; font-size: 18px; letter-spacing: 0.04em; text-transform: uppercase; }
        .va .tick .track span { display: inline-flex; align-items: center; gap: 14px; }
        .va .tick .track b { color: var(--accent); font-weight: 900; }
        @keyframes va-tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .va section.block { padding: calc(48px * var(--density)) var(--gut); border-bottom: 1.5px solid var(--rule); }
        .va .sec-head { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: baseline; padding-bottom: calc(18px * var(--density)); margin-bottom: calc(24px * var(--density)); border-bottom: 1.5px solid var(--rule); }
        .va .sec-head .num { font-family: var(--display); font-weight: 900; font-size: 14px; letter-spacing: 0.08em; }
        .va .sec-head h2 { font-family: var(--display); font-weight: 900; font-size: clamp(28px, 4.2vw, 58px); text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.95; }
        .va .sec-head .meta { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }

        /* eligibility quiz */
        .va .quiz { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1.5px solid var(--rule); }
        @media (max-width: 720px){ .va .quiz { grid-template-columns: 1fr; } }
        .va .qcell { padding: 20px 22px; border-right: 1.5px solid var(--rule); border-bottom: 1.5px solid var(--rule); display: flex; flex-direction: column; gap: 14px; min-height: 150px; }
        .va .qcell:nth-child(2n) { border-right: none; }
        @media (max-width: 720px){ .va .qcell { border-right: none; } }
        .va .qcell:nth-last-child(-n+2) { border-bottom: none; }
        @media (max-width: 720px){ .va .qcell:not(:last-child) { border-bottom: 1.5px solid var(--rule); } .va .qcell:last-child { border-bottom: none; } }
        .va .qcell .n { font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.08em; color: var(--accent); }
        .va .qcell .q { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 1.8vw, 24px); text-transform: uppercase; line-height: 1.05; }
        .va .qcell .hint { font-size: 13px; color: var(--muted); margin-top: auto; }
        .va .qcell .yesno { display: flex; gap: 8px; }
        .va .qbtn { flex: 1; padding: 9px 0; border: 1.5px solid var(--rule); font-size: 12px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
        .va .qbtn.on { background: var(--fg); color: var(--bg); }
        .va .qbtn.on.no { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .va .verdict { margin-top: calc(24px * var(--density)); padding: 22px 24px; border: 1.5px solid var(--rule); display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .va .verdict.good { background: var(--fg); color: var(--bg); }
        .va .verdict.bad { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .va .verdict .v { font-family: var(--display); font-weight: 900; font-size: clamp(22px, 2.6vw, 34px); text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.95; }
        .va .verdict .vsub { font-size: 13px; opacity: .9; }
        .va .verdict a.cta { background: var(--bg); color: var(--fg); padding: 12px 18px; font-weight: 900; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; display: inline-flex; gap: 8px; align-items: center; }

        /* register steps */
        .va .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-left: 1.5px solid var(--rule); }
        @media (max-width: 900px){ .va .steps { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px){ .va .steps { grid-template-columns: 1fr; border-left: none; } }
        .va .step { padding: 20px 22px; border-right: 1.5px solid var(--rule); border-top: 1.5px solid var(--rule); border-bottom: 1.5px solid var(--rule); display: flex; flex-direction: column; gap: 10px; min-height: 200px; }
        @media (max-width: 520px){ .va .step { border-right: none; border-left: 1.5px solid var(--rule); border-top: none; } .va .step:first-child { border-top: 1.5px solid var(--rule); } }
        .va .step .n { font-family: var(--display); font-weight: 900; font-size: clamp(38px, 4.8vw, 64px); line-height: 0.9; letter-spacing: -0.03em; }
        .va .step .t { font-family: var(--display); font-weight: 900; font-size: 15px; text-transform: uppercase; letter-spacing: 0.01em; }
        .va .step .d { font-size: 13px; color: var(--muted); }

        /* dates */
        .va .dates { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; }
        @media (max-width: 900px){ .va .dates { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px){ .va .dates { grid-template-columns: 1fr; } }
        .va .date { padding: 22px 20px; border: 1.5px solid var(--rule); margin: -1.5px 0 0 -1.5px; display: flex; flex-direction: column; gap: 14px; min-height: 150px; }
        .va .date:first-child { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .va .date .d { font-family: var(--display); font-weight: 900; font-size: clamp(22px, 2vw, 28px); letter-spacing: -0.02em; line-height: 0.95; }
        .va .date .l { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin-top: auto; }

        /* id list */
        .va .two { display: grid; grid-template-columns: 1fr 1fr; gap: calc(36px * var(--density)); }
        @media (max-width: 800px){ .va .two { grid-template-columns: 1fr; } }
        .va .ids { list-style: none; }
        .va .ids li { display: flex; gap: 14px; padding: 12px 0; border-top: 1px solid var(--rule); font-size: 14px; }
        .va .ids li:last-child { border-bottom: 1px solid var(--rule); }
        .va .ids li .check { font-family: var(--display); font-weight: 900; font-size: 13px; color: var(--accent); min-width: 22px; }
        .va .id-callout { padding: 24px; border: 1.5px solid var(--accent); background: var(--bg); }
        .va .id-callout .k { font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.1em; color: var(--accent); text-transform: uppercase; }
        .va .id-callout h3 { font-family: var(--display); font-weight: 900; font-size: clamp(20px, 2vw, 28px); text-transform: uppercase; margin: 10px 0 12px; letter-spacing: -0.01em; line-height: 0.95; }
        .va .id-callout p { font-size: 14px; color: var(--fg); line-height: 1.45; }
        .va .id-callout a { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; background: var(--accent); color: var(--bg); padding: 12px 16px; font-weight: 900; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }

        /* how to vote */
        .va .how { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        @media (max-width: 800px){ .va .how { grid-template-columns: 1fr; } }
        .va .way { padding: 24px; border: 1.5px solid var(--rule); margin: -1.5px 0 0 -1.5px; display: flex; flex-direction: column; gap: 14px; min-height: 240px; }
        .va .way .k { font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.1em; }
        .va .way h3 { font-family: var(--display); font-weight: 900; font-size: clamp(22px, 2.2vw, 30px); line-height: 0.95; letter-spacing: -0.01em; text-transform: uppercase; }
        .va .way p { font-size: 14px; color: var(--muted); margin-top: auto; }

        /* faq */
        .va .faq { border-top: 1.5px solid var(--rule); }
        .va .faq details { border-bottom: 1.5px solid var(--rule); }
        .va .faq summary { list-style: none; padding: 18px 0; display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: baseline; cursor: pointer; }
        .va .faq summary::-webkit-details-marker { display: none; }
        .va .faq summary .q { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 2.2vw, 26px); text-transform: uppercase; letter-spacing: -0.01em; line-height: 1; }
        .va .faq summary .p { font-family: var(--display); font-weight: 900; font-size: 22px; color: var(--accent); transition: transform .2s; }
        .va .faq details[open] summary .p { transform: rotate(45deg); }
        .va .faq .a { padding: 0 0 20px; max-width: 70ch; font-size: 14px; color: var(--fg); line-height: 1.5; }

        /* stance table */
        .va .stance { border: 1.5px solid var(--rule); }
        .va .stance .row { display: grid; grid-template-columns: 200px 1fr auto; gap: 20px; padding: 18px 20px; border-bottom: 1.5px solid var(--rule); align-items: center; }
        .va .stance .row:last-child { border-bottom: none; }
        @media (max-width: 720px){ .va .stance .row { grid-template-columns: 1fr; gap: 6px; } .va .stance .row .go { justify-self: start; } }
        .va .stance .issue { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 2vw, 26px); text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.95; }
        .va .stance .note { font-size: 14px; color: var(--muted); }
        .va .stance .go { font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); }

        /* outro */
        .va .outro { background: var(--fg); color: var(--bg); padding: calc(72px * var(--density)) var(--gut); border-bottom: 1.5px solid var(--rule); }
        .va .outro h2 { font-family: var(--display); font-weight: 900; font-size: clamp(48px, 9vw, 140px); text-transform: uppercase; line-height: 0.88; letter-spacing: -0.02em; }
        .va .outro h2 .red { color: var(--accent); }
        .va .outro .row { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: end; margin-top: 36px; padding-top: 24px; border-top: 1.5px solid var(--bg); }
        .va .outro p { max-width: 50ch; font-size: 15px; opacity: .8; }
        .va .outro .cta { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: var(--bg); padding: 18px 22px; font-weight: 900; letter-spacing: 0.02em; text-transform: uppercase; font-size: 15px; }

        .va footer { padding: 24px var(--gut); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
      `}</style>

      {/* top */}
      <div className="top">
        <div><span className="dot" />UNITED KING<b style={{color:'var(--accent)'}}>DOM</b></div>
        <nav>
          <a href="#eligible">Eligible?</a>
          <a href="#register">Register</a>
          <a href="#dates">Dates</a>
          <a href="#id">ID</a>
          <a href="#how">How</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="mono">EST. 2026 — NON-PARTISAN</div>
      </div>

      {/* hero */}
      <section className="hero">
        <div className="kicker">
          <span>A guide for first-time voters</span>
          <span>#01 / THE GAG</span>
        </div>
        <h1 className="display">
          BREAK<br />
          THE <span className="red">GAG</span>.<br />
          <span className="strike">SHUT</span> UP?<br />
          <span className="red">SHOW</span> UP.
        </h1>
        <div className="sub">
          <p>Nobody taught you how voting works. That is not an accident. This is the plainest English we can write it in — what you need, when, and how — so you can turn up and use the power you already have.</p>
          <a className="cta" href="#register">Register in 5 min <Arrow /></a>
        </div>
        <div className="stamp">NON-<br />PARTISAN<br /><span>NO PARTY. JUST PROCESS.</span></div>
      </section>

      {/* ticker */}
      <div className="tick">
        <div className="track">
          {[0,1].map(i => (
            <React.Fragment key={i}>
              <span>REGISTER BY <b>29 APR</b></span><span>·</span>
              <span>PHOTO ID REQUIRED</span><span>·</span>
              <span>POSTAL DEADLINE <b>22 APR · 5PM</b></span><span>·</span>
              <span>POLLS OPEN <b>07:00–22:00</b></span><span>·</span>
              <span>18+ (16+ SCOTLAND & WALES LOCAL)</span><span>·</span>
              <span>IT IS <b>FREE</b></span><span>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* eligibility */}
      <section className="block" id="eligible">
        <header className="sec-head">
          <span className="num">§ 01</span>
          <h2>Are you eligible?</h2>
          <span className="meta">4 questions · 30 sec</span>
        </header>
        <EligibilityQuiz />
      </section>

      {/* register */}
      <section className="block" id="register">
        <header className="sec-head">
          <span className="num">§ 02</span>
          <h2>Register to vote</h2>
          <span className="meta">5 min · gov.uk</span>
        </header>
        <div className="steps">
          {REGISTER_STEPS.map(s => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <div className="t">{s.t}</div>
              <div className="d">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* dates */}
      <section className="block" id="dates">
        <header className="sec-head">
          <span className="num">§ 03</span>
          <h2>Key dates</h2>
          <span className="meta">Miss these and you don't vote</span>
        </header>
        <div className="dates">
          {DATES.map(d => (
            <div className="date" key={d.d}>
              <div className="d tnum">{d.d}</div>
              <div className="l">{d.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ID */}
      <section className="block" id="id">
        <header className="sec-head">
          <span className="num">§ 04</span>
          <h2>What counts as ID</h2>
          <span className="meta">Accepted photo ID only</span>
        </header>
        <div className="two">
          <ul className="ids">
            {IDS.map(i => <li key={i}><span className="check">✓</span>{i}</li>)}
          </ul>
          <div className="id-callout">
            <div className="k">No ID? No problem.</div>
            <h3>Get a free Voter Authority Certificate.</h3>
            <p>The government will post you a photo ID specifically for voting. It is free, takes five minutes, and you can apply from a phone. Deadline is usually 6 working days before polling day.</p>
            <a href="#">Apply at gov.uk <Arrow /></a>
          </div>
        </div>
      </section>

      {/* how */}
      <section className="block" id="how">
        <header className="sec-head">
          <span className="num">§ 05</span>
          <h2>How to vote</h2>
          <span className="meta">Three ways, same ballot</span>
        </header>
        <div className="how">
          {HOW_TO_VOTE.map(w => (
            <div className="way" key={w.k}>
              <div className="k">{w.k}</div>
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* stances */}
      <section className="block" id="stances">
        <header className="sec-head">
          <span className="num">§ 06</span>
          <h2>Where they stand</h2>
          <span className="meta">Issues that hit young people hardest</span>
        </header>
        <div className="stance">
          {STANCES.map(s => (
            <div className="row" key={s.issue}>
              <div className="issue">{s.issue}</div>
              <div className="note">{s.note}</div>
              <div className="go">Compare <Arrow /></div>
            </div>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="block" id="faq">
        <header className="sec-head">
          <span className="num">§ 07</span>
          <h2>Small print</h2>
          <span className="meta">Frequently asked</span>
        </header>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}>
              <summary><span className="q">{f.q}</span><span className="p">+</span></summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* outro */}
      <section className="outro">
        <h2>USE <span className="red">YOUR</span><br />VOICE. USE<br />YOUR <span className="red">VOTE.</span></h2>
        <div className="row">
          <p>The youngest generation is the biggest. Turn up and the country you live in starts to look like you. Don't and it keeps looking like someone else's memory.</p>
          <a href="#" className="cta">Register now <Arrow /></a>
        </div>
      </section>

      <footer>
        <div>© UNITED KING<span style={{color:'var(--accent)'}}>DOM</span> · NON-PARTISAN GUIDE</div>
        <div>SOURCES: GOV.UK · ELECTORAL COMMISSION</div>
        <div>NOT AFFILIATED WITH ANY PARTY</div>
      </footer>
    </div>
  );
}

// ---- eligibility quiz ----
function EligibilityQuiz() {
  const [ans, setAns] = React.useState([null, null, null, null]);
  const set = (i, v) => setAns(a => a.map((x, j) => j === i ? v : x));
  const all = ans.every(x => x !== null);
  const allYes = ans.slice(0, 3).every(x => x === 'yes') && ans[3] === 'yes';
  return (
    <>
      <div className="quiz">
        {ELIGIBILITY.map((q, i) => (
          <div className="qcell" key={i}>
            <div className="n">Q.0{i+1}</div>
            <div className="q">{q.q}</div>
            <div className="hint">{q.hint}</div>
            <div className="yesno">
              <button className={`qbtn${ans[i] === 'yes' ? ' on' : ''}`} onClick={() => set(i, 'yes')}>Yes</button>
              <button className={`qbtn no${ans[i] === 'no' ? ' on' : ''}`} onClick={() => set(i, 'no')}>No</button>
            </div>
          </div>
        ))}
      </div>
      {all && (
        <div className={`verdict ${allYes ? 'good' : 'bad'}`}>
          <div>
            <div className="v">{allYes ? 'You can vote.' : 'Check the detail.'}</div>
            <div className="vsub">{allYes ? 'Now register — it takes five minutes and stays valid until you move.' : 'A "no" doesn\u2019t always mean no. Read the eligibility notes on gov.uk — edge cases matter.'}</div>
          </div>
          <a href={allYes ? '#register' : '#'} className="cta">{allYes ? 'Register now' : 'Check gov.uk'} <Arrow /></a>
        </div>
      )}
    </>
  );
}

Object.assign(window, { VariationA });
