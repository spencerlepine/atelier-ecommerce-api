
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: ./k6.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
           * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (01.0s), 10/10 VUs, 1014 complete and 0 interrupted iterations
default   [  10% ] 10 VUs  01.0s/10s

running (02.0s), 10/10 VUs, 2173 complete and 0 interrupted iterations
default   [  20% ] 10 VUs  02.0s/10s

running (02.7s), 10/10 VUs, 3040 complete and 0 interrupted iterations
default   [  27% ] 10 VUs  02.7s/10s

running (03.0s), 10/10 VUs, 3384 complete and 0 interrupted iterations
default   [  30% ] 10 VUs  03.0s/10s

running (03.0s), 10/10 VUs, 3428 complete and 0 interrupted iterations
default   [  30% ] 10 VUs  03.0s/10s

running (04.0s), 10/10 VUs, 4700 complete and 0 interrupted iterations
default   [  40% ] 10 VUs  04.0s/10s

running (05.0s), 10/10 VUs, 6449 complete and 0 interrupted iterations
default   [  50% ] 10 VUs  05.0s/10s

running (06.0s), 10/10 VUs, 8443 complete and 0 interrupted iterations
default   [  60% ] 10 VUs  06.0s/10s

running (07.0s), 10/10 VUs, 10564 complete and 0 interrupted iterations
default   [  70% ] 10 VUs  07.0s/10s

running (08.0s), 10/10 VUs, 12505 complete and 0 interrupted iterations
default   [  80% ] 10 VUs  08.0s/10s

running (08.9s), 10/10 VUs, 13730 complete and 0 interrupted iterations
default   [  89% ] 10 VUs  08.9s/10s

running (09.0s), 10/10 VUs, 13858 complete and 0 interrupted iterations
default   [  90% ] 10 VUs  09.0s/10s

running (10.0s), 10/10 VUs, 15931 complete and 0 interrupted iterations
default   [ 100% ] 10 VUs  10.0s/10s

running (10.0s), 00/10 VUs, 15945 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  10s

     ✓ success

     checks.........................: 100.00% ✓ 15945     ✗ 0    
     data_received..................: 29 MB   2.9 MB/s
     data_sent......................: 1.4 MB  140 kB/s
     http_req_blocked...............: avg=1.74µs  min=0s     med=1µs    max=925µs    p(90)=2µs     p(95)=3µs    
     http_req_connecting............: avg=254ns   min=0s     med=0s     max=474µs    p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=6.21ms  min=1.42ms med=4.06ms max=184.68ms p(90)=10.67ms p(95)=14.35ms
       { expected_response:true }...: avg=6.21ms  min=1.42ms med=4.06ms max=184.68ms p(90)=10.67ms p(95)=14.35ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 15945
     http_req_receiving.............: avg=28.66µs min=5µs    med=17µs   max=6.45ms   p(90)=55µs    p(95)=71µs   
     http_req_sending...............: avg=6.79µs  min=1µs    med=3µs    max=7.06ms   p(90)=11µs    p(95)=15µs   
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.17ms  min=1.41ms med=4.03ms max=184.62ms p(90)=10.6ms  p(95)=14.29ms
     http_reqs......................: 15945   1594.1053/s
     iteration_duration.............: avg=6.26ms  min=1.46ms med=4.11ms max=184.77ms p(90)=10.74ms p(95)=14.45ms
     iterations.....................: 15945   1594.1053/s
     vus............................: 10      min=10      max=10 
     vus_max........................: 10      min=10      max=10 

