import { render } from '@redwoodjs/testing'

import DiningManagerPage from './DiningManagerPage'

describe('DiningManagerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DiningManagerPage />)
    }).not.toThrow()
  })
})
