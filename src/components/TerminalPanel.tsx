interface TerminalLine {
  cmd?: string
  out?: string
  kind?: 'ok' | 'warn' | 'sec' | 'text'
  blank?: boolean
}

interface TerminalPanelProps {
  title: string
  lines: TerminalLine[]
}

const KIND_CLASS: Record<string, string> = {
  ok: 't-ok',
  warn: 't-warn',
  sec: 't-sec',
  text: 't-out'
}

export function TerminalPanel({ title, lines }: TerminalPanelProps) {
  return (
    <div className="terminal" role="img" aria-label={`Terminal preview: ${title}`}>
      <div className="terminal-bar">
        <span className="t-dot" style={{ background: '#ff5f57' }} aria-hidden="true" />
        <span className="t-dot" style={{ background: '#febc2e' }} aria-hidden="true" />
        <span className="t-dot" style={{ background: '#28c840' }} aria-hidden="true" />
        <span className="t-title">{title}</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => {
          if (line.blank) return <div key={i}>&nbsp;</div>
          return (
            <div key={i} className="t-line">
              {line.cmd && (
                <>
                  <span className="t-prompt">$ </span>
                  <span className="t-cmd">{line.cmd}</span>
                </>
              )}
              {line.out && <span className={KIND_CLASS[line.kind ?? 'text']}>{line.out}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
