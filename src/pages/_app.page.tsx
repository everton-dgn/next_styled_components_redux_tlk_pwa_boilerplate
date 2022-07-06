import type { AppProps } from 'next/app'
import { Page } from 'types/page'
import { MainProviders } from 'ui/providers'
import * as C from 'ui/components'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Template = Component.Template || C.DefaultTemplate

  return (
    <MainProviders>
      <Template>
        <Component {...pageProps} />
      </Template>
    </MainProviders>
  )
}
