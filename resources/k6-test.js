import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};
export default function () {
  const res = http.get('localhost3000/products');
  check(res, {
    success: (r) => r.status === 200,
  });
}
