// Variation C — DASHBOARD / TERMINAL
// Dark field with lime-ish red accent, status widgets, a bigger eligibility
// wizard, compact FAQ, dense data-viz feel. Mono-heavy.

function VariationC() {
  return (
    <div className="ukd-root vc" style={{ minHeight: '100%' }}>
      <style>{`
        .vc { --gut: calc(22px * var(--density)); --panel: #0A0A0A; --panelbg: #F4F1EA; background: var(--panel); color: var(--panelbg); }
        .vc .nav { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; padding: 12px var(--gut); border-bottom: 1px solid rgba(244,241,234,0.25); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vc .nav .logo { font-family: var(--display); font-weight: 900; font-size: 16px; letter-spacing: -0.01em; text-transform: none; }
        .vc .nav .logo b { color: var(--accent); }
        .vc .nav .status { display: flex; gap: 20px; justify-self: center; color: rgba(244,241,234,0.6); }
        .vc .nav .status .live { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); }
        .vc .nav .status .live::before { content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; animation: vc-pulse 1.3s infinite; }
        @keyframes vc-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .vc .nav .right { display: flex; gap: 18px; }
        .vc .nav .right a:hover { color: var(--accent); }
        @media (max-width: 720px){ .vc .nav .status, .vc .nav .right { display: none; } .vc .nav { grid-template-columns: 1fr; } }

        /* hero panel */
        .vc .hero { padding: calc(40px * var(--density)) var(--gut) calc(28px * var(--density)); border-bottom: 1px solid rgba(244,241,234,0.25); }
        .vc .hero .over { font-family: ui-monospace, monospace; font-size: 11px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 16px; }
        .vc .hero h1 { font-family: var(--display); font-weight: 900; font-size: clamp(48px, 11vw, 180px); letter-spacing: -0.03em; line-height: 0.88; text-transform: uppercase; overflow-wrap: break-word; word-break: break-word; }
        .vc .hero h1 .red { color: var(--accent); }
        .vc .hero h1 .bracket { color: rgba(244,241,234,0.4); }
        .vc .hero .row { display: grid; grid-template-columns: 2fr 1fr; gap: 0; margin-top: calc(32px * var(--density)); border-top: 1px solid rgba(244,241,234,0.25); padding-top: 22px; }
        @media (max-width: 800px){ .vc .hero .row { grid-template-columns: 1fr; } }
        .vc .hero .row > div { padding-right: 22px; border-right: 1px solid rgba(244,241,234,0.25); min-width: 0; }
        .vc .hero .row > div:last-child { border-right: none; padding-right: 0; padding-left: 22px; }
        @media (max-width: 800px){ .vc .hero .row > div { border-right: none; border-bottom: 1px solid rgba(244,241,234,0.25); padding: 16px 0; } .vc .hero .row > div:last-child { padding-left: 0; border-bottom: none; } }
        .vc .hero .row p { font-size: 14px; line-height: 1.45; color: rgba(244,241,234,0.85); }
        .vc .hero .row .stat .k { font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(244,241,234,0.6); margin-bottom: 6px; }
        .vc .hero .row .stat .v { font-family: var(--display); font-weight: 900; font-size: clamp(34px, 4vw, 52px); letter-spacing: -0.02em; line-height: 0.95; }
        .vc .hero .row .stat .v.red { color: var(--accent); }
        .vc .hero .row .stat .sub { font-size: 11px; color: rgba(244,241,234,0.55); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; }
        .vc .hero .cta-row { display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
        .vc .hero .cta { display: inline-flex; align-items: center; gap: 8px; padding: 12px 16px; font-family: "PPNC-Nor"; font-weight: 600; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; color: #fff; }
        .vc .hero .cta.prim { background: var(--accent); color: var(--panel); }
        .vc .hero .cta.sec { border: 1px solid rgba(244,241,234,0.4); color: var(--panelbg); }
        .vc .hero .cta.sec:hover { border-color: var(--accent); color: var(--accent); }

        /* panel grid */
        .vc .panels { display: grid; grid-template-columns: repeat(12, 1fr); gap: 0; border-bottom: 1px solid rgba(244,241,234,0.25); }
        .vc .panel { padding: 22px 20px; border-right: 1px solid rgba(244,241,234,0.25); border-bottom: 1px solid rgba(244,241,234,0.25); min-height: 220px; display: flex; flex-direction: column; gap: 12px; min-width: 0; }
        .vc .panel:last-child { border-right: none; }
        .vc .panel .k { font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(244,241,234,0.5); display: flex; justify-content: space-between; }
        .vc .panel .k b { color: var(--accent); font-weight: 500; }
        .vc .panel h3 { font-family: var(--display); font-weight: 900; font-size: clamp(18px, 2vw, 26px); letter-spacing: -0.01em; line-height: 0.95; text-transform: uppercase; }

        .vc .p-wizard { grid-column: span 7; }
        .vc .p-countdown { grid-column: span 5; background: var(--accent); color: var(--panel); }
        .vc .p-countdown .k { color: rgba(10,10,10,0.6); }
        .vc .p-countdown .k b { color: var(--panel); }
        .vc .p-steps { grid-column: span 12; }
        .vc .p-dates { grid-column: span 7; }
        .vc .p-id { grid-column: span 5; }
        .vc .p-how { grid-column: span 12; padding: 0; min-height: 0; }
        .vc .p-stance { grid-column: span 7; }
        .vc .p-faq { grid-column: span 5; }
        @media (max-width: 1000px){
          .vc .p-wizard, .vc .p-countdown, .vc .p-dates, .vc .p-id, .vc .p-stance, .vc .p-faq { grid-column: span 12; }
        }

        /* wizard */
        .vc .wizard .q { font-family: var(--display); font-weight: 900; font-size: clamp(22px, 2.4vw, 32px); line-height: 1; text-transform: uppercase; letter-spacing: -0.01em; margin: 6px 0 4px; }
        .vc .wizard .hint { font-size: 13px; color: rgba(244,241,234,0.6); margin-bottom: 14px; }
        .vc .wizard .opts { display: flex; gap: 10px; }
        .vc .wizard .opt { flex: 1; padding: 14px 16px; border: 1px solid rgba(244,241,234,0.4); font-family: "PPNC-Nor"; font-weight: 600; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; text-align: center; display: flex; justify-content: center; align-items: center; color: #fff; background: transparent; cursor: pointer; }
        .vc .wizard .opt:hover { border-color: var(--accent); color: var(--accent); }
        .vc .wizard .opt .k { font-family: ui-monospace, monospace; font-size: 11px; opacity: .6; }
        .vc .wizard .progress { display: flex; gap: 4px; margin-top: auto; padding-top: 12px; }
        .vc .wizard .progress span { flex: 1; height: 4px; background: rgba(244,241,234,0.2); }
        .vc .wizard .progress span.on { background: var(--accent); }
        .vc .wizard .progress span.cur { background: var(--panelbg); }
        .vc .wizard .result-x { display: flex; flex-direction: column; gap: 10px; }
        .vc .wizard .result-x h4 { font-family: var(--display); font-weight: 900; font-size: clamp(26px, 3vw, 40px); text-transform: uppercase; letter-spacing: -0.02em; line-height: 0.95; }
        .vc .wizard .result-x h4.good { color: var(--accent); }
        .vc .wizard .result-x p { font-size: 13px; color: rgba(244,241,234,0.85); line-height: 1.5; }
        .vc .wizard .result-x .acts { display: flex; gap: 10px; margin-top: 8px; }
        .vc .wizard .result-x .acts a { padding: 10px 14px; font-family: var(--display); font-weight: 900; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .vc .wizard .result-x .acts a.a1 { background: var(--accent); color: var(--panel); }
        .vc .wizard .result-x .acts a.a2 { border: 1px solid rgba(244,241,234,0.4); color: var(--panelbg); }

        /* countdown */
        .vc .p-countdown .big { font-family: var(--display); font-weight: 900; font-size: clamp(60px, 9vw, 150px); line-height: 0.85; letter-spacing: -0.04em; }
        .vc .p-countdown .big span { display: inline-block; }
        .vc .p-countdown .big small { font-size: 0.25em; vertical-align: top; margin-left: 6px; letter-spacing: 0.06em; text-transform: uppercase; }
        .vc .p-countdown .label { font-family: var(--display); font-weight: 900; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; margin-top: auto; }

        /* steps panel */
        .vc .p-steps { padding: 0; min-height: 0; display: block; }
        .vc .p-steps > .k { padding: 22px 20px 14px; font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(244,241,234,0.5); display: flex; justify-content: space-between; }
        .vc .p-steps > .k b { color: var(--accent); font-weight: 500; }
        .vc .stepgrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid rgba(244,241,234,0.25); }
        @media (max-width: 900px){ .vc .stepgrid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px){ .vc .stepgrid { grid-template-columns: 1fr; } }
        .vc .stepgrid > div { padding: 20px; border-right: 1px solid rgba(244,241,234,0.25); display: flex; flex-direction: column; gap: 10px; min-height: 180px; }
        .vc .stepgrid > div:last-child { border-right: none; }
        .vc .stepgrid .n { font-family: var(--display); font-weight: 900; font-size: clamp(36px, 4vw, 56px); color: var(--accent); line-height: 0.9; letter-spacing: -0.03em; }
        .vc .stepgrid .t { font-family: var(--display); font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.01em; }
        .vc .stepgrid .d { font-size: 12px; color: rgba(244,241,234,0.65); line-height: 1.45; }

        /* dates panel */
        .vc .dline { display: flex; flex-direction: column; gap: 8px; }
        .vc .dline .row { display: grid; grid-template-columns: 110px 1fr auto; gap: 10px; padding: 10px 0; border-top: 1px solid rgba(244,241,234,0.18); font-size: 13px; align-items: center; }
        @media (max-width: 520px){ .vc .dline .row { grid-template-columns: 90px 1fr auto; gap: 8px; font-size: 12px; } }
        .vc .dline .row:first-child { border-top: none; color: var(--accent); }
        .vc .dline .row:first-child .dot { background: var(--accent); }
        .vc .dline .d { font-family: var(--display); font-weight: 900; font-size: 13px; letter-spacing: 0.01em; }
        .vc .dline .l { color: rgba(244,241,234,0.85); }
        .vc .dline .dot { width: 8px; height: 8px; background: rgba(244,241,234,0.4); border-radius: 50%; justify-self: end; }

        /* ID list */
        .vc .idlist { display: grid; grid-template-columns: 1fr; gap: 0; }
        .vc .idlist > div { padding: 9px 0; border-top: 1px dotted rgba(244,241,234,0.25); font-size: 12px; display: flex; gap: 10px; align-items: baseline; }
        .vc .idlist > div:first-child { border-top: none; }
        .vc .idlist b { color: var(--accent); font-family: ui-monospace, monospace; font-size: 10px; min-width: 22px; }

        /* how-to bar */
        .vc .p-how { padding: 0; min-height: 0; display: block; }
        .vc .howrow { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(244,241,234,0.25); }
        @media (max-width: 800px){ .vc .howrow { grid-template-columns: 1fr; } }
        .vc .howrow > div { padding: 24px 22px; border-right: 1px solid rgba(244,241,234,0.25); min-height: 200px; display: flex; flex-direction: column; gap: 10px; }
        .vc .howrow > div:last-child { border-right: none; }
        .vc .howrow .k { font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.12em; color: var(--accent); }
        .vc .howrow h4 { font-family: var(--display); font-weight: 900; font-size: clamp(20px, 2.2vw, 28px); text-transform: uppercase; letter-spacing: -0.01em; line-height: 0.95; }
        .vc .howrow p { font-size: 13px; color: rgba(244,241,234,0.7); line-height: 1.5; margin-top: auto; }

        /* stances */
        .vc .stance-list { display: flex; flex-direction: column; gap: 0; }
        .vc .stance-list > div { padding: 12px 0; border-top: 1px dotted rgba(244,241,234,0.25); display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: center; }
        @media (max-width: 520px){ .vc .stance-list > div { grid-template-columns: 1fr; gap: 4px; } .vc .stance-list .p { justify-self: start; } }
        .vc .stance-list > div:first-child { border-top: none; }
        .vc .stance-list .i { font-family: var(--display); font-weight: 900; font-size: clamp(16px, 1.6vw, 20px); text-transform: uppercase; letter-spacing: -0.005em; }
        .vc .stance-list .n { font-size: 12px; color: rgba(244,241,234,0.65); }
        .vc .stance-list .p { font-family: ui-monospace, monospace; font-size: 11px; color: var(--accent); }

        /* faq */
        .vc .faqlist details { border-top: 1px dotted rgba(244,241,234,0.25); }
        .vc .faqlist details:first-child { border-top: none; }
        .vc .faqlist summary { list-style: none; cursor: pointer; padding: 10px 0; display: grid; grid-template-columns: 1fr auto; gap: 10px; font-family: var(--display); font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: -0.005em; line-height: 1.1; }
        .vc .faqlist summary::-webkit-details-marker { display: none; }
        .vc .faqlist summary .p { color: var(--accent); }
        .vc .faqlist details[open] summary .p { transform: rotate(180deg); transition: transform .2s; }
        .vc .faqlist summary .p { transition: transform .2s; display: inline-flex; align-items: center; }
        .vc .faqlist .a { padding: 4px 0 12px; font-size: 12px; color: rgba(244,241,234,0.75); line-height: 1.5; }

        /* outro */
        .vc .outro { padding: calc(56px * var(--density)) var(--gut); background: var(--panelbg); color: var(--panel); }
        .vc .outro h2 { font-family: var(--display); font-weight: 900; font-size: clamp(40px, 11vw, 180px); line-height: 0.86; letter-spacing: -0.03em; text-transform: uppercase; overflow-wrap: break-word; word-break: break-word; }
        .vc .outro h2 .red { color: var(--accent); }
        .vc .outro .row { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: end; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--panel); }
        @media (max-width: 700px){ .vc .outro .row { grid-template-columns: 1fr; } }
        .vc .outro p { max-width: 50ch; font-size: 14px; line-height: 1.5; }
        .vc .outro .cta { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; padding: 16px 22px; font-family: "PPNC-Nor"; font-weight: 600; font-size: 16px; letter-spacing: 1px; text-transform: uppercase; }

        .vc footer { padding: 16px var(--gut); font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(244,241,234,0.55); display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
      `}</style>

      {/* nav */}
      <div className="nav">
        <div className="logo">UNITED KING<b>DOM</b></div>
        <div className="status">
          <span>POLLS OPEN IN <b style={{color:'var(--accent)'}}>23 DAYS</b></span>
        </div>
        <div className="right">
          <a href="#elig">Eligibility</a>
          <a href="#reg">Register</a>
          <a href="#how">Vote</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      {/* hero */}
      <section className="hero" style={{padding:'40px 0px 0px'}}>
        <h1 style={{fontSize:'clamp(52px, 13vw, 180px)',letterSpacing:'0.6px',padding:'0px 20px'}}>
          BREAK<br />
          THE <span className="red">GAG</span>
        </h1>
        <div className="row" style={{padding:'0px'}}>
          <div style={{padding:'24px 24px 24px 20px'}}>
            <p style={{width:'100%'}}>Rent, wages, tuition, healthcare, climate: the rules that shape your life are set by people you choose at the ballot box. If you don't turn up, someone else picks for you. Voting is free, takes a minute, and is the single cheapest bit of power you'll ever hold.</p>
            <div className="cta-row">
              <a href="#reg" className="cta prim" style={{color:'rgb(255,255,255)'}}>Register <Arrow /></a>
              <a href="#elig" className="cta sec" style={{color:'rgb(255,255,255)'}}>Am I eligible?</a>
            </div>
          </div>
          <div className="stat" style={{textAlign:'left',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0px 0px 0px 20px'}}>
            <div className="k" style={{letterSpacing:'1px',fontFamily:'PPNC-Nor',fontSize:'12px'}}>18–25 TURNOUT, 2024</div>
            <div className="v red">65%</div>
            <div className="sub" style={{letterSpacing:'1px',fontSize:'12px'}}>vs 90% aged 65+</div>
          </div>
        </div>
      </section>

      {/* panel grid */}
      <div className="panels">
        <div className="panel p-wizard" id="elig" style={{padding:'20px'}}>
          <div className="k" style={{padding:'0px',textAlign:'left',alignItems:'center',height:'60px'}}><b style={{fontFamily:'var(--display)',fontWeight:900,color:'rgb(255,255,255)',fontSize:'clamp(20px, 3.2vw, 32px)',letterSpacing:'0px'}}>ELIGIBILITY QUIZ</b></div>
          <Wizard />
        </div>

        <div className="panel p-countdown" style={{padding:'0px 20px',alignItems:'stretch',justifyContent:'center'}}>
          <div className="k"></div>
          <h3 style={{fontFamily:'"PPNC-Ext"',color:'rgb(255,255,255)',letterSpacing:'0px'}}>Registration closes in</h3>
          <div className="big"><span style={{color:'rgb(255,255,255)',letterSpacing:'0px'}}>23</span><small style={{letterSpacing:'0px',color:'rgb(255,255,255)',fontWeight:600,padding:'0px',margin:'4px 0px 0px 6px'}}>DAYS</small></div>
        </div>

        <div className="panel p-steps" id="reg">
          <div className="k" style={{padding:'24px 20px',textAlign:'left',alignItems:'center'}}><b style={{fontFamily:'var(--display)',fontWeight:900,color:'rgb(255,255,255)',fontSize:'clamp(20px, 3.2vw, 32px)',letterSpacing:'0px'}}>HOW TO REGISTER</b><b style={{height:'12px',fontSize:'12px',fontWeight:200}}>gov.uk</b></div>
          <div className="stepgrid">
            {REGISTER_STEPS.map(s => (
              <div key={s.n}>
                <div className="n">{s.n}</div>
                <div className="t">{s.t}</div>
                <div className="d" style={{fontSize:'14px'}}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-dates">
          <div className="k"></div>
          <h3 style={{letterSpacing:'0px',fontSize:'clamp(20px, 3vw, 32px)'}}>Deadlines</h3>
          <div className="dline">
            {DATES.map((d, i) => (
              <div className="row" key={d.d}>
                <div className="d tnum">{d.d}</div>
                <div className="l" style={{fontSize:'14px'}}>{d.l}</div>
                <div className="dot" />
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-id">
          <div className="k"><b style={{fontSize:'12px',fontWeight:200}}>8 TYPES</b></div>
          <h3 style={{fontSize:'clamp(20px, 3vw, 32px)',letterSpacing:'0px'}}>Bring one</h3>
          <div className="idlist">
            {IDS.map((i, k) => <div key={i} style={{fontSize:'14px'}}><b>{String(k+1).padStart(2,'0')}</b>{i}</div>)}
          </div>
        </div>

        <div className="panel p-how" id="how">
          <div className="k" style={{padding:'24px 20px',alignItems:'center'}}><b style={{fontFamily:'var(--display)',fontWeight:900,color:'rgb(255,255,255)',fontSize:'clamp(20px, 3.2vw, 32px)',letterSpacing:'0px'}}>HOW TO VOTE</b><b style={{height:'12px',fontSize:'12px'}}>3 METHODS</b></div>
          <div className="howrow">
            {HOW_TO_VOTE.map(w => (
              <div key={w.k}>
                <div className="k" style={{fontSize:'12px'}}>{w.k}</div>
                <h4 style={{color:'rgb(229,38,31)',fontSize:'24px'}}>{w.t}</h4>
                <p style={{fontSize:'14px'}}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-stance">
          <div className="k"></div>
          <h3>Where they stand</h3>
          <div className="stance-list">
            {STANCES.map((s, i) => (
              <div key={s.issue}>
                <div className="i" style={{fontSize:'16px',letterSpacing:'0px',fontFamily:'PPNC-Ext'}}>{String(i+1).padStart(2,'0')} · {s.issue}</div>
                <div className="n" style={{fontSize:'14px'}}>{s.note}</div>
                <div className="p" style={{fontSize:'14px'}}>→ compare</div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-faq" id="faq">
          <h3 style={{fontSize:'24px'}}>FAQ</h3>
          <div className="faqlist">
            {FAQS.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary><span>{f.q}</span><span className="p"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><polyline points="3 5 7 9 11 5"/></svg></span></summary>
                <div className="a" style={{fontSize:'14px'}}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* outro */}
      <section className="outro">
        <h2>SHOW<br /><span className="red">UP.</span></h2>
        <div className="row">
          <p>The easiest political act you can take. Five minutes. No cost. No affiliation. Do it before you forget.</p>
          <a href="#" className="cta">Register at gov.uk <Arrow /></a>
        </div>
      </section>

    </div>
  );
}

function Wizard() {
  const [step, setStep] = React.useState(0);
  const [ans, setAns] = React.useState([]);
  const done = step >= ELIGIBILITY.length;
  const good = done && ans.every(a => a === 'yes');

  const answer = (v) => { setAns([...ans, v]); setStep(step + 1); };
  const reset = () => { setAns([]); setStep(0); };

  if (done) {
    return (
      <div className="wizard">
        <div className="result-x">
          <div style={{fontSize:11,letterSpacing:'0.12em',color:'rgba(244,241,234,0.6)',textTransform:'uppercase',fontFamily:'ui-monospace,monospace'}}>RESULT</div>
          <h4 className={good ? 'good' : ''}>{good ? 'YOU CAN VOTE.' : 'CHECK THE DETAIL.'}</h4>
          <p>{good
            ? 'You meet every condition. Now go register — it takes five minutes and stays valid until you move house.'
            : 'You answered "no" to at least one. Some exceptions apply (students, overseas voters, age in Scotland/Wales). Check gov.uk/eligibility-to-vote.'
          }</p>
          <div className="acts">
            <a href="#reg" className="a1">{good ? 'Register' : 'Check rules'} <Arrow /></a>
            <a href="#" className="a2" onClick={(e) => {e.preventDefault(); reset();}}>Restart</a>
          </div>
        </div>
        <div className="progress" style={{marginTop:12}}>
          {ELIGIBILITY.map((_, i) => <span key={i} className="on" />)}
        </div>
      </div>
    );
  }

  const q = ELIGIBILITY[step];
  return (
    <div className="wizard">
      <div style={{fontSize:11,letterSpacing:'0.12em',color:'rgba(244,241,234,0.6)',textTransform:'uppercase',fontFamily:'ui-monospace,monospace'}}>
        QUESTION {step+1} / {ELIGIBILITY.length}
      </div>
      <div className="q" style={{fontSize:'24px',color:'rgb(229,38,31)'}}>{q.q}</div>
      <div className="hint" style={{fontSize:'14px'}}>{q.hint}</div>
      <div className="opts">
        <button className="opt" onClick={() => answer('yes')}>Yes</button>
        <button className="opt" onClick={() => answer('no')}>No</button>
      </div>
      <div className="progress">
        {ELIGIBILITY.map((_, i) => <span key={i} className={i < step ? 'on' : i === step ? 'cur' : ''} />)}
      </div>
    </div>
  );
}

Object.assign(window, { VariationC });
