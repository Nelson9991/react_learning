import { useEffect, useState } from 'react';
import { ApiResponse } from '../models/ApiResponse';

interface FechtState {
  data: ApiResponse | null;
  loading: boolean;
  error: object | null;
}

export const useFetch = (url: string): FechtState => {
  const [state, setState] = useState<FechtState>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    setState({
      ...state,
      loading: true
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      loading: false,
      error: null
    });
  };

  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};
