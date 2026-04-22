// Variation B — EDITORIAL GRID
// Civic-newspaper layout. Condensed/Normal mix. Dense, rational, column-based.

function VariationB() {
  const [open, setOpen] = React.useState(0);
  const [lookup, setLookup] = React.useState('');
  const result = React.useMemo(() => {
    if (!lookup) return null;
    const p = lookup.trim().toUpperCase().replace(/\s+/g,' ');
    if (p.length < 2) return null;
    // fake lookup — just picks based on first char
    const h = p.charCodeAt(0) % 3;
    return {
      ward: ['Central','North','Riverside'][h] + ' Ward',
      station: ['St Mary\u2019s Church Hall','Victoria Community Centre','Riverside Library'][h],
      addr: ['12 Church St','44 Victoria Rd','8 Riverside Walk'][h],
      walk: ['6','11','4'][h],
    };
  }, [lookup]);

  return (
    <div className="ukd-root vb" style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100%' }}>
      <style>{`
        .vb { --gut: calc(28px * var(--density)); --col-gap: calc(32px * var(--density)); --rule: #0A0A0A; }
        .vb .masthead { border-top: 6px solid var(--fg); border-bottom: 1.5px solid var(--rule); padding: 10px var(--gut); display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: center; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vb .masthead .l { display: flex; gap: 22px; color: var(--muted); }
        .vb .masthead .c { font-family: var(--display); font-weight: 900; font-size: clamp(20px, 2.4vw, 30px); letter-spacing: -0.01em; text-transform: none; }
        .vb .masthead .c b { color: var(--accent); }
        .vb .masthead .r { justify-self: end; display: flex; gap: 18px; }
        @media (max-width: 720px){ .vb .masthead { grid-template-columns: 1fr; text-align: center; } .vb .masthead .l, .vb .masthead .r { display: none; } }

        .vb .issue-bar { padding: 6px var(--gut); border-bottom: 1.5px solid var(--rule); display: flex; justify-content: space-between; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        .vb .hero { padding: calc(40px * var(--density)) var(--gut) calc(32px * var(--density)); border-bottom: 3px double var(--rule); display: grid; grid-template-columns: 1fr; gap: calc(24px * var(--density)); }
        .vb .hero .over { font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.2em; color: var(--accent); }
        .vb .hero h1 { font-family: var(--display); font-weight: 900; font-size: clamp(48px, 9.5vw, 160px); text-transform: uppercase; letter-spacing: -0.03em; line-height: 0.86; }
        .vb .hero h1 .red { color: var(--accent); }
        .vb .hero .deck { display: grid; grid-template-columns: 2fr 1fr; gap: var(--col-gap); padding-top: 20px; border-top: 1.5px solid var(--rule); }
        @media (max-width: 800px){ .vb .hero .deck { grid-template-columns: 1fr; } }
        .vb .hero .deck p { font-size: clamp(14px, 1.1vw, 16px); line-height: 1.45; max-width: 60ch; column-count: 2; column-gap: var(--col-gap); column-rule: 1px solid var(--rule); }
        @media (max-width: 600px){ .vb .hero .deck p { column-count: 1; } }
        .vb .hero .deck aside { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
        .vb .hero .deck aside h4 { font-family: var(--display); font-weight: 900; font-size: 13px; letter-spacing: 0.08em; margin-bottom: 10px; color: var(--accent); }
        .vb .hero .deck aside ul { list-style: none; }
        .vb .hero .deck aside li { padding: 6px 0; border-top: 1px solid var(--rule); display: flex; justify-content: space-between; gap: 10px; }
        .vb .hero .deck aside li:last-child { border-bottom: 1px solid var(--rule); }
        .vb .hero .deck aside li b { font-family: var(--display); font-weight: 900; }

        .vb section.col { padding: calc(36px * var(--density)) var(--gut); border-bottom: 1.5px solid var(--rule); }
        .vb .sec-head { display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: baseline; border-bottom: 1.5px solid var(--rule); padding-bottom: 14px; margin-bottom: calc(24px * var(--density)); }
        .vb .sec-head .n { font-family: var(--display); font-weight: 900; font-size: 14px; letter-spacing: 0.12em; color: var(--accent); }
        .vb .sec-head h2 { font-family: var(--display); font-weight: 900; font-size: clamp(28px, 4.2vw, 52px); text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.95; }
        .vb .sec-head .kicker { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); grid-column: 2; }

        /* 3-col grid for eligibility summary + register + dates */
        .vb .triple { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--col-gap); }
        @media (max-width: 900px){ .vb .triple { grid-template-columns: 1fr; } }
        .vb .triple > div { border-top: 1.5px solid var(--rule); padding-top: 18px; }
        .vb .triple h3 { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 2vw, 24px); text-transform: uppercase; letter-spacing: -0.01em; margin-bottom: 10px; line-height: 0.95; }
        .vb .triple p { font-size: 13px; line-height: 1.5; margin-bottom: 10px; }
        .vb .triple ul { list-style: none; }
        .vb .triple li { display: flex; gap: 10px; padding: 7px 0; font-size: 13px; border-top: 1px dotted rgba(10,10,10,.4); }
        .vb .triple li:first-child { border-top: none; }
        .vb .triple li b { color: var(--accent); font-family: var(--display); font-weight: 900; font-size: 11px; min-width: 18px; }

        /* two-col: lookup / dates */
        .vb .pair { display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--col-gap); }
        @media (max-width: 800px){ .vb .pair { grid-template-columns: 1fr; } }

        .vb .lookup { border: 1.5px solid var(--rule); padding: 22px; display: flex; flex-direction: column; gap: 14px; }
        .vb .lookup .k { font-family: var(--display); font-weight: 900; font-size: 11px; letter-spacing: 0.12em; color: var(--accent); text-transform: uppercase; }
        .vb .lookup h3 { font-family: var(--display); font-weight: 900; font-size: clamp(22px, 2.4vw, 32px); text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.95; }
        .vb .lookup .row { display: flex; gap: 0; border: 1.5px solid var(--rule); }
        .vb .lookup input { flex: 1; border: none; outline: none; padding: 14px 16px; font: inherit; background: var(--bg); font-size: 14px; }
        .vb .lookup button { background: var(--fg); color: var(--bg); padding: 0 18px; font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vb .lookup .hint { font-size: 12px; color: var(--muted); }
        .vb .lookup .result { border-top: 1.5px solid var(--rule); padding-top: 14px; display: grid; grid-template-columns: 1fr auto; gap: 14px; }
        .vb .lookup .result .station { font-family: var(--display); font-weight: 900; font-size: 18px; letter-spacing: -0.01em; line-height: 1.1; text-transform: uppercase; }
        .vb .lookup .result .addr { font-size: 13px; color: var(--muted); margin-top: 4px; }
        .vb .lookup .result .walk { text-align: right; }
        .vb .lookup .result .walk b { font-family: var(--display); font-weight: 900; font-size: 30px; color: var(--accent); display: block; line-height: 1; letter-spacing: -0.02em; }
        .vb .lookup .result .walk span { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        .vb .dateline { border: 1.5px solid var(--rule); }
        .vb .dateline .row { display: grid; grid-template-columns: 120px 1fr auto; gap: 14px; padding: 14px 18px; border-bottom: 1.5px solid var(--rule); align-items: baseline; }
        .vb .dateline .row:last-child { border-bottom: none; }
        .vb .dateline .row.first { background: var(--accent); color: var(--bg); }
        .vb .dateline .d { font-family: var(--display); font-weight: 900; font-size: 14px; letter-spacing: 0.02em; }
        .vb .dateline .l { font-size: 13px; }
        .vb .dateline .c { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .vb .dateline .row.first .c { color: var(--bg); opacity: .8; }

        /* ID + how grid */
        .vb .four { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1.5px solid var(--rule); border-left: 1.5px solid var(--rule); }
        @media (max-width: 900px){ .vb .four { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px){ .vb .four { grid-template-columns: 1fr; } }
        .vb .four > div { padding: 18px 16px; border-right: 1.5px solid var(--rule); border-bottom: 1.5px solid var(--rule); font-size: 13px; display: flex; align-items: flex-start; gap: 10px; min-height: 80px; }
        .vb .four > div b { color: var(--accent); font-family: var(--display); font-weight: 900; font-size: 10px; letter-spacing: 0.1em; min-width: 24px; }

        .vb .how { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--col-gap); border-top: 1.5px solid var(--rule); padding-top: 24px; }
        @media (max-width: 800px){ .vb .how { grid-template-columns: 1fr; } }
        .vb .how article { border-left: 2px solid var(--accent); padding-left: 16px; }
        .vb .how article h3 { font-family: var(--display); font-weight: 900; font-size: 11px; letter-spacing: 0.12em; color: var(--accent); text-transform: uppercase; margin-bottom: 8px; }
        .vb .how article h4 { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 2vw, 24px); text-transform: uppercase; letter-spacing: -0.01em; margin-bottom: 10px; line-height: 0.95; }
        .vb .how article p { font-size: 13px; line-height: 1.5; }

        /* stances as newspaper index */
        .vb .index { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 var(--col-gap); }
        @media (max-width: 720px){ .vb .index { grid-template-columns: 1fr; } }
        .vb .index a { display: grid; grid-template-columns: auto 1fr auto; gap: 14px; padding: 14px 0; border-top: 1px dotted rgba(10,10,10,.5); font-size: 13px; align-items: baseline; }
        .vb .index a .i { font-family: var(--display); font-weight: 900; font-size: 14px; letter-spacing: 0.02em; text-transform: uppercase; }
        .vb .index a .n { color: var(--muted); }
        .vb .index a .p { color: var(--accent); font-family: var(--display); font-weight: 900; font-size: 11px; letter-spacing: 0.1em; }
        .vb .index a:hover { background: var(--fg); color: var(--bg); padding-left: 8px; padding-right: 8px; }
        .vb .index a:hover .n { color: var(--bg); opacity: .7; }

        /* faq */
        .vb .faq .item { border-top: 1px solid var(--rule); padding: 14px 0; }
        .vb .faq .item:last-child { border-bottom: 1px solid var(--rule); }
        .vb .faq .item .q { display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: baseline; cursor: pointer; font-family: var(--display); font-weight: 900; font-size: clamp(15px, 1.4vw, 18px); text-transform: uppercase; letter-spacing: -0.005em; line-height: 1.05; }
        .vb .faq .item .n { color: var(--accent); }
        .vb .faq .item .p { color: var(--muted); font-size: 12px; }
        .vb .faq .item .a { margin-top: 10px; font-size: 13px; line-height: 1.55; max-width: 70ch; }

        /* footer block */
        .vb .finale { padding: calc(56px * var(--density)) var(--gut); border-bottom: 1.5px solid var(--rule); display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--col-gap); background: var(--fg); color: var(--bg); }
        @media (max-width: 800px){ .vb .finale { grid-template-columns: 1fr; } }
        .vb .finale h2 { font-family: var(--display); font-weight: 900; font-size: clamp(40px, 7vw, 110px); text-transform: uppercase; line-height: 0.88; letter-spacing: -0.03em; }
        .vb .finale h2 em { font-style: normal; color: var(--accent); }
        .vb .finale p { font-size: 14px; line-height: 1.5; opacity: .8; max-width: 45ch; margin-top: 14px; }
        .vb .finale .cta { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: var(--bg); padding: 16px 20px; font-family: var(--display); font-weight: 900; font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; margin-top: 24px; }
        .vb .finale .stat { border-top: 1.5px solid var(--bg); padding-top: 14px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; opacity: .8; }
        .vb .finale .stat b { font-family: var(--display); font-weight: 900; font-size: clamp(40px, 5vw, 72px); display: block; color: var(--accent); letter-spacing: -0.02em; line-height: 0.95; margin-bottom: 6px; }
        .vb .finale .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .vb footer { padding: 18px var(--gut); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
      `}</style>

      {/* masthead */}
      <div className="masthead">
        <div className="l"><span>VOL. 01</span><span>APR 21, 2026</span><span>FREE</span></div>
        <div className="c">UNITED KING<b>DOM</b></div>
        <div className="r"><span>NON-PARTISAN</span><span>GUIDE № 01</span></div>
      </div>
      <div className="issue-bar">
        <span>A guide to voting for people who don't read guides</span>
        <span>→ Register · Deadlines · ID · How</span>
      </div>

      {/* hero */}
      <section className="hero">
        <div className="over">GUIDE № 01 · BREAK THE GAG</div>
        <h1>SILENCE IS A<br />POLICY <span className="red">DECISION.</span></h1>
        <div className="deck">
          <p>Every five years someone draws up the rules that govern your rent, your wages, your tuition, your healthcare, your Tube fare, your right to gather, and your right to leave. You don't have to like politics to vote — you just have to not want someone else to decide for you. Voting in the UK is free, five-minutes, and largely automatic once you register. Here is what you need to know. In plain English. From the official sources, with the bits that matter highlighted.</p>
          <aside>
            <h4>In this issue</h4>
            <ul>
              <li>Am I eligible? <b>§ 01</b></li>
              <li>Register to vote <b>§ 02</b></li>
              <li>Key dates <b>§ 03</b></li>
              <li>ID requirements <b>§ 04</b></li>
              <li>How to vote <b>§ 05</b></li>
              <li>Find polling place <b>§ 06</b></li>
              <li>Issues at stake <b>§ 07</b></li>
              <li>FAQ <b>§ 08</b></li>
            </ul>
          </aside>
        </div>
      </section>

      {/* eligibility + register + dates (triple) */}
      <section className="col" id="top">
        <div className="triple">
          <div>
            <h3>01 · Eligible?</h3>
            <p>You need to be 18+ on polling day (16+ in Scotland &amp; Wales for local/Senedd/Holyrood), a British / Irish / qualifying Commonwealth citizen, living at a UK address, and not legally excluded.</p>
            <ul>
              {ELIGIBILITY.map((e, i) => <li key={i}><b>0{i+1}</b>{e.q}</li>)}
            </ul>
          </div>
          <div>
            <h3>02 · Register</h3>
            <p>The only official route is gov.uk/register-to-vote. It's free and takes five minutes on a phone. You'll need your National Insurance number.</p>
            <ul>
              {REGISTER_STEPS.map(s => <li key={s.n}><b>{s.n}</b>{s.t}</li>)}
            </ul>
          </div>
          <div>
            <h3>§ 03 · Deadlines</h3>
            <p>Miss any of these and you don't vote in the May 2026 locals. Diary them now.</p>
            <ul>
              {DATES.map(d => <li key={d.d}><b>→</b><span><span className="tnum">{d.d}</span><br /><span style={{color:'var(--muted)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'.08em'}}>{d.l}</span></span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* polling lookup + dateline */}
      <section className="col">
        <header className="sec-head">
          <span className="n">§ 04</span>
          <h2>Find your polling place</h2>
          <span className="kicker">Type a postcode · we match you to your ward</span>
        </header>
        <div className="pair">
          <div className="lookup">
            <div className="k">POLLING LOOKUP</div>
            <h3>Type your postcode.</h3>
            <div className="row">
              <input value={lookup} onChange={e => setLookup(e.target.value)} placeholder="e.g. SW1A 1AA" />
              <button onClick={() => setLookup(lookup || 'SW1A 1AA')}>Find</button>
            </div>
            <div className="hint">Demo lookup · for real polling stations use wheredoivote.co.uk or check your poll card.</div>
            {result && (
              <div className="result">
                <div>
                  <div className="station">{result.station}</div>
                  <div className="addr">{result.addr} · {result.ward}</div>
                </div>
                <div className="walk">
                  <b>{result.walk}<span style={{fontSize:'14px'}}>min</span></b>
                  <span>Walk</span>
                </div>
              </div>
            )}
          </div>
          <div className="dateline">
            {DATES.map((d, i) => (
              <div className={`row${i === 0 ? ' first' : ''}`} key={d.d}>
                <div className="d tnum">{d.d}</div>
                <div className="l">{d.l}</div>
                <div className="c">{i === 0 ? 'Polling day' : '5pm'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ID */}
      <section className="col">
        <header className="sec-head">
          <span className="n">§ 05</span>
          <h2>Accepted photo ID</h2>
          <span className="kicker">Bring one. Any one.</span>
        </header>
        <div className="four">
          {IDS.map(i => <div key={i}><b>✓</b>{i}</div>)}
        </div>
      </section>

      {/* how */}
      <section className="col">
        <header className="sec-head">
          <span className="n">§ 06</span>
          <h2>Three ways to vote</h2>
          <span className="kicker">In person · by post · by proxy</span>
        </header>
        <div className="how">
          {HOW_TO_VOTE.map(w => (
            <article key={w.k}>
              <h3>{w.k}</h3>
              <h4>{w.t}</h4>
              <p>{w.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* stances */}
      <section className="col">
        <header className="sec-head">
          <span className="n">§ 07</span>
          <h2>Issues at stake</h2>
          <span className="kicker">Where young voters should look first</span>
        </header>
        <div className="index">
          {STANCES.map((s, i) => (
            <a href="#" key={s.issue}>
              <span className="i">{String(i+1).padStart(2,'0')} · {s.issue}</span>
              <span className="n">{s.note}</span>
              <span className="p">Read →</span>
            </a>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="col">
        <header className="sec-head">
          <span className="n">§ 08</span>
          <h2>Questions asked repeatedly</h2>
          <span className="kicker">Click to open</span>
        </header>
        <div className="faq">
          {FAQS.map((f, i) => (
            <div className="item" key={i}>
              <div className="q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="n">Q.0{i+1}</span>
                <span>{f.q}</span>
                <span className="p">{open === i ? '—' : '+'}</span>
              </div>
              {open === i && <div className="a">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* finale */}
      <section className="finale">
        <div>
          <h2>NOT VOTING IS <em>ALSO</em><br />A VOTE — FOR<br /><em>SOMEONE ELSE.</em></h2>
          <p>If 18–24s turned out at the rate of pensioners, the map of Westminster would look different by Wednesday. This is the cheapest, easiest, lowest-effort political act you can take. Do it.</p>
          <a href="#" className="cta">Register at gov.uk <Arrow /></a>
        </div>
        <div>
          <div className="stats">
            <div className="stat"><b>47%</b>18–24 turnout, 2024 general</div>
            <div className="stat"><b>76%</b>65+ turnout, 2024 general</div>
            <div className="stat"><b>5 min</b>Time to register</div>
            <div className="stat"><b>£0</b>Cost. Zero. Nada.</div>
          </div>
        </div>
      </section>

      <footer>
        <span>© UNITED KING<span style={{color:'var(--accent)'}}>DOM</span></span>
        <span>SOURCED FROM GOV.UK · ELECTORAL COMMISSION · ABOUT-MY-VOTE</span>
        <span>NON-PARTISAN · NON-COMMERCIAL</span>
      </footer>
    </div>
  );
}

Object.assign(window, { VariationB });
