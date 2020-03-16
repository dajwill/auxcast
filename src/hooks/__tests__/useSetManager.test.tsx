import { renderHook, act } from '@testing-library/react-hooks';
import useSetManager from '../useSetManager';

describe('Set state manager', () => {
  it('creates a new set', () => {
    const { result } = renderHook(() => useSetManager());
    expect(result.current).toEqual(
      expect.objectContaining({
        queue: expect.any(Array),
        playIndex: expect.any(Number),
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
    );
  });

  it('sets play index via song', () => {
    const songs = [
      { title: 'Silly Watch' },
      { title: 'DHL' }
    ]
    const { result } = renderHook(useSetManager);

    act(() => {
      result.current.addSong(songs[0]);
      result.current.addSong(songs[1]);
      result.current.playSong(1);
    });

    expect(result.current.playIndex).toEqual(1);
  });
});