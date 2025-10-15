import App from '../App'
import { Router } from 'wouter'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function Main() {
  return (
    <>
    <Router>
      <App />
    </Router>
    <SpeedInsights />
    <Analytics />
    </>
  )
}
