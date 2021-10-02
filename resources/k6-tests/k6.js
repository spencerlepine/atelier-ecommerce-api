import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};
export default function () {
  // const endpoint = process.env.ENDPOINT;
  const res = http.get(`http://localhost:3000/${__ENV.ENDPOINT}`);
  check(res, {
    success: (r) => r.status === 200,
  });
}
