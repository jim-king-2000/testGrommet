'use client';

import { Grommet, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import StyledComponentsRegistry from './registry';

const myTheme = deepMerge(grommet, {
	global: {
		font: {
			family: `-apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif`,
		},
	},
});

export default function RootLayout({ children, modal }) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<Grommet full theme={myTheme} themeMode='dark'>
						{children}
						{modal}
					</Grommet>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
