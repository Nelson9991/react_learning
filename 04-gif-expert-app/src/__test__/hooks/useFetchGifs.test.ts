import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('useFetchGifs hook tests', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of gifs and isLoding false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0), {
      timeout: 1000
    });

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
