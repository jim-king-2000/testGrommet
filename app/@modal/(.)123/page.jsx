'use client';

import { Layer, Box, List, Tip, Text, Button, ResponsiveContext } from 'grommet';
import { Gremlin } from 'grommet-icons';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// const data = [
//   { city: 'Boise', state: 'Idaho' },
//   { city: 'Fort Collins', state: 'Colorado' },
//   { city: 'Bay Area', state: 'California' },
//   { city: 'San Diego', state: 'California' },
// ];

export default function Page() {
	const router = useRouter();

	return (
		<Layer
			onEsc={() => router.back()}
			onClickOutside={() => {
				console.log('back');
			}}
		>
			<Box border pad='medium' fill gap='large' overflow='hide'>
				abc - 123
			</Box>
		</Layer>
	);
}
