import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders exactly one H1', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders the hero headline', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /성세현/ }),
    ).toBeInTheDocument()
  })

  it('renders the story statement band beneath the hero', () => {
    render(<App />)
    expect(screen.getByText('FROM CODE')).toBeInTheDocument()
    expect(screen.getByText('TO BUSINESS.')).toBeInTheDocument()
  })

  it('renders all four nav anchors plus GitHub', () => {
    render(<App />)
    // The desktop <nav> is responsively hidden below 860px via CSS (a
    // separate mobile menu takes over), so it's not part of jsdom's default
    // accessibility tree at its default viewport width. `hidden: true`
    // includes it — it's still present and reachable at wider viewports.
    // Matched by attribute rather than accessible name, since jsdom's name
    // computation for display:none subtrees is unreliable in this setup.
    const navs = screen.getAllByRole('navigation', { hidden: true })
    const nav = navs.find((el) => el.getAttribute('aria-label') === '주요 내비게이션')
    expect(nav).toBeDefined()
    expect(nav).toHaveTextContent('Experience')
    expect(nav).toHaveTextContent('Renewal')
    expect(nav).toHaveTextContent('Simulator')
    expect(nav).toHaveTextContent('Growth')
    expect(nav).toHaveTextContent('GitHub')
  })

  it('states the simulator is an independent personal project', () => {
    render(<App />)
    expect(screen.getByText(/INDEPENDENT PERSONAL PROJECT/)).toBeInTheDocument()
  })

  it('does not claim official HULL adoption of the simulator', () => {
    render(<App />)
    expect(screen.queryByText(/HULL에서 실제 사용 중/)).not.toBeInTheDocument()
    expect(screen.queryByText(/고객사 도입 완료/)).not.toBeInTheDocument()
  })
})
