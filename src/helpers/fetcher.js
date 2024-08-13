import { API_HOST, API_TOKEN } from '@configs/environment';

const DEFAULT_HEADERS = {
  Authorization: `Bearer ${API_TOKEN}`,
  "Content-Type": "application/json",
}

export const fetchWithToken = ({ endpoint = '', method = 'GET', headers = {} }) =>
  fetch(`${API_HOST}${endpoint}`, {
    headers: {
      ...DEFAULT_HEADERS,
      ...headers
    },
    method,
  }).then((res) => res.json());
