import {
	useQuery,
} from '@tanstack/react-query';

export const { isLoading, error, data } = useQuery(['jobData'], () => {
    return fetch('https://lusty.asia:1443/api/jobs')
      .then(res => res.json());
});