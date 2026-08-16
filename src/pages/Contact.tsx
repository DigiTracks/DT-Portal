import { useState, type FormEvent } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export function Contact() {
  usePageMeta({
    title: 'Contact - Digi Tracks',
    description:
      'Tell Digi Tracks what you are trying to manage, replace or improve. Start a conversation about building software for it.'
  })

  const [status, setStatus] = useState<Status>('idle')
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    const form = e.currentTarget
    const data = new FormData(form)
    
    const name = (data.get('name') as string || '').trim()
    const email = (data.get('email') as string || '').trim()
    const message = (data.get('message') as string || '').trim()

    if (!name) {
      setFormError('Please enter your name.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setFormError('Please provide a valid email address.')
      return
    }

    if (!message || message.length < 5) {
      setFormError('Please provide a brief message describing what you need.')
      return
    }

    const encoded = new URLSearchParams(data as unknown as URLSearchParams)

    setStatus('sending')
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json, text/plain, */*'
        },
        body: encoded.toString(),
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      if (res.ok || res.type === 'opaqueredirect' || res.redirected) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      clearTimeout(timeoutId)
      setStatus('error')
    }
  }

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker">Contact</p>
            <h1 className="h2" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', marginBottom: 16 }}>
              Have a problem worth <span className="grad-text">building software for?</span>
            </h1>
            <p className="lead">Tell us what you are trying to manage, replace or improve.</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="card" style={{ background: 'transparent', borderColor: 'transparent', padding: 0 }}>
              <h2 className="h3" style={{ marginBottom: 12 }}>
                What happens next
              </h2>
              <p className="sub">
                We read every message. We do not promise instant responses or 24/7 support, but we
                do take the time to understand the problem before replying.
              </p>

              <div style={{ marginTop: 20 }}>
                <a
                  href="mailto:digi.tracks@outlook.com"
                  className="btn btn-primary"
                  style={{ gap: 8, padding: '10px 20px', fontSize: '0.86rem' }}
                >
                  <span>Email: digi.tracks@outlook.com</span>
                </a>
              </div>

              <div style={{ marginTop: 28 }}>
                <p className="kicker" style={{ marginBottom: 12 }}>
                  Worth mentioning
                </p>
                <p className="sub">
                  The most useful conversations start with the problem, not the software. Describe
                  how things run today, what breaks, and what a good outcome would look like.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form name="contact" method="post" onSubmit={handleSubmit} data-netlify="true" noValidate>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-field" type="text" id="name" name="name" autoComplete="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-field" type="email" id="email" name="email" autoComplete="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">What are you trying to manage, replace or improve?</label>
                <textarea className="form-field" id="message" name="message" required />
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Start a Conversation'}
                {status !== 'sending' && <span aria-hidden="true">&rarr;</span>}
              </button>

              {formError && (
                <p className="form-status form-status--err" role="alert" style={{ marginTop: 16 }}>
                  {formError}
                </p>
              )}
              {status === 'ok' && (
                <p className="form-status form-status--ok" role="status">
                  Message sent. Thank you - we'll get back to you when we can.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--err" role="alert">
                  Something went wrong sending your message. Please try again.
                </p>
              )}
              <p className="form-note">
                Your message goes directly to the studio. No marketing lists, no account required.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
