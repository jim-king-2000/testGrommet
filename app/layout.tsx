import { Grommet, grommet } from 'grommet';
import StyledComponentsRegistry from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Grommet full theme={grommet} themeMode='auto'>
            {children}
          </Grommet>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}