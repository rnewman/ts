import Example from '../src/Example';

describe('Example', () => {
  it('works', async () => {
    const s = await Example.go();
    expect(s).toBe('hello, world');
  });
});
