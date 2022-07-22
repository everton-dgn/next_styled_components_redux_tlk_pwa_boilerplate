import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Button from '..'

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    const user = userEvent.setup({ delay: null })
    const onClick = jest.fn()

    renderWithProviders(
      <Button
        onClick={onClick}
        text="Mais Informações"
        color="blue"
        size="large"
      />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    await user.click(btn)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render a small blue button with text', () => {
    const { container } = renderWithProviders(
      <Button text="Mais Informações" color="blue" size="small" />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    expect(btn).toHaveStyle({
      height: 'min-content',
      padding: '8px 12px',
      fontSize: '1.2rem'
    })

    expect(btn).toBeEnabled()
    expect(container).toMatchSnapshot()
  })

  it('should render a medium blue button with text', () => {
    renderWithProviders(
      <Button size="medium" text="Mais Informações" color="blue" />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    expect(btn).toHaveStyle({
      height: 'min-content',
      padding: '12px 24px',
      fontSize: '1.4rem'
    })
  })

  it('should render a disabled Button', () => {
    renderWithProviders(
      <Button disabled text="Mais Informações" color="blue" size="large" />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    expect(btn).toHaveStyle({
      cursor: 'not-allowed',
      opacity: 0.5
    })
    expect(btn).toBeDisabled()
  })

  it('should render a Button with full width', () => {
    renderWithProviders(
      <Button
        disabled
        text="Mais Informações"
        color="blue"
        size="large"
        fullWidth={true}
      />
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })

    expect(btn).toHaveStyle({ width: '100%' })
  })
})
