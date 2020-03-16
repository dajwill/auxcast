import { renderHook } from '@testing-library/react-hooks';
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
});