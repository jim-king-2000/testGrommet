import { Box } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';

function SectorBox({ angle, onClick }) {
  return (
    <Box
      hoverIndicator align='center' justify='center'
      background='dark-3' width='50%' height='50%' onClick={onClick}
      style={{
        position: 'absolute',
        transform: `rotate(${angle}deg)`,
        transformOrigin: '100% 100%',
        borderRadius: '100% 0 0 0',
      }}
    >
      <CaretLeftFill style={{ transform: 'rotate(45deg)' }} />
    </Box>
  );
}

function Circle() {
  return (
    <Box background='dark-2' round='full' width='40%' height='40%'
      margin='auto'
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    />
  );
}

export function PanControl({ size='medium', ...props }) {
  return (
    <Box flex={false} width={size} height={size} style={{ position: 'relative' }} {...props}>
      <SectorBox angle={45} onClick={() => console.log('up')} />
      <SectorBox angle={135} onClick={() => console.log('right')} />
      <SectorBox angle={225} onClick={() => console.log('down')} />
      <SectorBox angle={315} onClick={() => console.log('left')} />
      <Circle />
    </Box>
  );
}