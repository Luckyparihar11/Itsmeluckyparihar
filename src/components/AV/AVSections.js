import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";
import { stats, chain, jobs, avStack } from "../../data/AVData";

const BLUE = "rgb(57, 134, 250)";
const Band = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1rem;
`;
const Stat = styled.div`
  a { color: inherit; display: block; }
  &:hover { transform: translateY(-3px); }
  transition: transform 0.2s ease-in-out;
  background: #fff;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px;
  b { display: block; font-size: 2.2rem; color: ${BLUE}; font-weight: 700; }
  span { font-size: 14px; color: #151418; }
`;

function Count({ to, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let i = 0;
      const t = setInterval(() => {
        i += 1;
        setN(Math.round((to * i) / 30));
        if (i >= 30) clearInterval(t);
      }, 35);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{n}{suffix}</b>;
}

export function Stats() {
  return (
    <div style={{ background: "#151418", padding: "1rem 0 3.5rem" }}>
      <div className="Container">
        <Band>
          {stats.map((s) => {
            const body = (
              <>
                {s.text ? <b>{s.text}</b> : <Count to={s.value} suffix={s.suffix || ""} />}
                <span>{s.label}</span>
              </>
            );
            return (
              <Stat key={s.label}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{body}</a>
                ) : body}
              </Stat>
            );
          })}
        </Band>
      </div>
    </div>
  );
}

const Flow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;
const Node = styled.button`
  border: 2px solid ${BLUE};
  border-radius: 8px;
  padding: 10px 18px;
  font: inherit;
  cursor: pointer;
  color: ${(p) => (p.on ? "#fff" : "#151418")};
  background: ${(p) => (p.on ? BLUE : "#fff")};
  transition: all 0.2s ease-in-out;
  &:focus-visible { outline: 3px solid #151418; outline-offset: 2px; }
`;
const Bars = styled.div`
  display: flex; justify-content: center; align-items: flex-end; gap: 4px; height: 50px; margin-bottom: 1rem;
  i {
    width: 8px; height: 100%; border-radius: 2px; transform-origin: bottom;
    background: linear-gradient(to top, #2ecc71 0 55%, #f5b301 55% 85%, #e74c3c 85%);
    animation: lvl 1.4s ease-in-out infinite alternate;
  }
  @keyframes lvl { from { transform: scaleY(0.15); } to { transform: scaleY(0.95); } }
  @media (prefers-reduced-motion: reduce) { i { animation: none; transform: scaleY(0.6); } }
`;

export function SignalChain() {
  const [k, setK] = useState(0);
  return (
    <div className="Container" style={{ marginTop: "5rem" }}>
      <div className="SectionTitle">How a Room Comes Alive</div>
      <div className="BigCard" style={{ textAlign: "center" }}>
        <Bars aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((b) => (
            <i key={b} style={{ animationDelay: `${b * 0.15}s` }} />
          ))}
        </Bars>
        <Flow>
          {chain.map((c, i) => (
            <Node key={c.name} on={i === k} onClick={() => setK(i)}>{c.name}</Node>
          ))}
        </Flow>
        <p className="AboutBio" style={{ textAlign: "center" }}>{chain[k].text}</p>
      </div>
    </div>
  );
}

const Timeline = styled.div`
  border-left: 3px solid ${BLUE};
  padding-left: 1.5rem;
  margin-left: 0.5rem;
`;
const Job = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  &::before {
    content: ""; position: absolute; left: calc(-1.5rem - 9px); top: 6px;
    width: 15px; height: 15px; border-radius: 50%; background: ${BLUE}; border: 3px solid #fafaff;
  }
  h4 { font-size: 1.25rem; color: #151418; }
  small { color: ${BLUE}; font-weight: 500; }
  p { color: rgba(0, 0, 0, 0.8); line-height: 1.6; margin-top: 0.4rem; }
`;

export function Experience() {
  return (
    <div className="Container" id="experience" style={{ marginTop: "5rem" }}>
      <div className="SectionTitle">Experience</div>
      <Timeline>
        {jobs.map((j) => (
          <ScrollAnimation animateIn="fadeInLeft" key={j.company}>
            <Job>
              <h4>{j.company}, {j.role}</h4>
              <small>{j.when}</small>
              <ul style={{ marginTop: "0.5rem" }}>
                {j.points.map((p) => <li key={p}><p>{p}</p></li>)}
              </ul>
            </Job>
          </ScrollAnimation>
        ))}
      </Timeline>
    </div>
  );
}

const Chips = styled.div`display: flex; flex-wrap: wrap; gap: 6px; margin-top: 0.5rem;`;
const Chip = styled.span`
  border-radius: 10px; background: #f5f5f5; padding: 5px 10px; font-size: 14px;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;

export function AVStack() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      {avStack.map((g) => (
        <ScrollAnimation animateIn="fadeInLeft" key={g.group}>
          <div style={{ marginBottom: "1.2rem" }}>
            <strong>{g.group}</strong>
            <Chips>{g.items.map((i) => <Chip key={i}>{i}</Chip>)}</Chips>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
