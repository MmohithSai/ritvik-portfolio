import "./LegalPage.css";

type Props = { title: string; updated?: string; sections: { heading: string; body: string }[] };

export default function LegalPage({ title, updated, sections }: Props) {
  return (
    <section className="legal section section--light">
      <div className="legal__inner">
        <span className="tag">Legal information</span>
        <h1 className="h-display-l">{title}</h1>
        {updated && <p className="body">{updated}</p>}
        {sections.map((s) => (
          <div key={s.heading} className="legal__block">
            <h2 className="h-section">{s.heading}</h2>
            {s.body.split("\n\n").map((para) => (
              <p key={para} className="body">
                {para.split("\n").map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
