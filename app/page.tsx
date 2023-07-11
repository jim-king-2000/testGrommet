'use client';

import { Grommet, Box, List, Tip, Text, Button } from 'grommet';
import { Gremlin } from 'grommet-icons';
import { PanControl } from './PanControl';

// const data = [
//   { city: 'Boise', state: 'Idaho' },
//   { city: 'Fort Collins', state: 'Colorado' },
//   { city: 'Bay Area', state: 'California' },
//   { city: 'San Diego', state: 'California' },
// ];

export default function Page() {
  return (
    <Box fill gap='large' overflow='hide'>
      {/* <List data={data} pad="medium" border={false}>
        {(datum) => (
          <Tip content={datum.state} dropProps={{ align: { left: 'right' } }}>
            <Box direction="row-responsive" gap="medium" align="center">
              <Gremlin size="large" />
              <Text weight="bold">{datum.city}</Text>
            </Box>
          </Tip>
        )}
      </List> */}
      <Text>Hello grommet!</Text>
      <Button label='test' icon={<Gremlin />} />
      <PanControl size='medium' />
    </Box>
  );
}