import sinkShip from '../displayControls.js';

test('sinks a ship', () => {
	expect(sinkShip()).toBe('down she goes!');
});
