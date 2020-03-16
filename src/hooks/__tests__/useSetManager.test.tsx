import { renderHook, act } from '@testing-library/react-hooks';
import useSetManager from '../useSetManager';

describe('Set state manager', () => {
  it('creates a new set', () => {
    const { result } = renderHook(() => useSetManager());
    expect(result.current).toEqual(
      expect.objectContaining({
        queue: expect.any(Array),
      })
    );
  });

  it('adds a song to the queue', () => {
    const song = { title: 'Silly Watch' }
    const { result } = renderHook(useSetManager);

    act(() => {
      result.current.addSong(song);
    });

    expect(result.current.queue).toEqual(
      expect.arrayContaining([song])
    )
  })
});