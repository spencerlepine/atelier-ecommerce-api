
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


running (00.3s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   3% ] 10 VUs  00.3s/10s

running (00.6s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [   6% ] 10 VUs  00.6s/10s

running (01.0s), 10/10 VUs, 4 complete and 0 interrupted iterations
default   [  10% ] 10 VUs  01.0s/10s

running (02.0s), 10/10 VUs, 8 complete and 0 interrupted iterations
default   [  20% ] 10 VUs  02.0s/10s

running (03.0s), 10/10 VUs, 16 complete and 0 interrupted iterations
default   [  30% ] 10 VUs  03.0s/10s

running (04.0s), 10/10 VUs, 20 complete and 0 interrupted iterations
default   [  40% ] 10 VUs  04.0s/10s

running (05.0s), 10/10 VUs, 27 complete and 0 interrupted iterations
default   [  50% ] 10 VUs  05.0s/10s

running (06.0s), 10/10 VUs, 34 complete and 0 interrupted iterations
default   [  60% ] 10 VUs  06.0s/10s

running (07.0s), 10/10 VUs, 41 complete and 0 interrupted iterations
default   [  70% ] 10 VUs  07.0s/10s

running (07.8s), 10/10 VUs, 46 complete and 0 interrupted iterations
default   [  78% ] 10 VUs  07.8s/10s

running (08.0s), 10/10 VUs, 49 complete and 0 interrupted iterations
default   [  80% ] 10 VUs  08.0s/10s

running (09.0s), 10/10 VUs, 55 complete and 0 interrupted iterations
default   [  90% ] 10 VUs  09.0s/10s

running (10.0s), 10/10 VUs, 60 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (11.0s), 01/10 VUs, 69 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (11.1s), 00/10 VUs, 70 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  10s

     ✓ success

     checks.........................: 100.00% ✓ 70       ✗ 0   
     data_received..................: 18 kB   1.6 kB/s
     data_sent......................: 7.1 kB  646 B/s
     http_req_blocked...............: avg=152.82µs min=1µs      med=4µs   max=1.15ms p(90)=1.03ms  p(95)=1.04ms  
     http_req_connecting............: avg=58.87µs  min=0s       med=0s    max=476µs  p(90)=391.4µs p(95)=410.15µs
     http_req_duration..............: avg=1.48s    min=918.61ms med=1.38s max=3.36s  p(90)=1.95s   p(95)=2.09s   
       { expected_response:true }...: avg=1.48s    min=918.61ms med=1.38s max=3.36s  p(90)=1.95s   p(95)=2.09s   
     http_req_failed................: 0.00%   ✓ 0        ✗ 70  
     http_req_receiving.............: avg=79.62µs  min=33µs     med=73µs  max=140µs  p(90)=104.3µs p(95)=116.55µs
     http_req_sending...............: avg=22.65µs  min=9µs      med=17µs  max=110µs  p(90)=36µs    p(95)=54.19µs 
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s    max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=1.48s    min=918.46ms med=1.38s max=3.36s  p(90)=1.95s   p(95)=2.09s   
     http_reqs......................: 70      6.330433/s
     iteration_duration.............: avg=1.48s    min=920.01ms med=1.38s max=3.36s  p(90)=1.95s   p(95)=2.09s   
     iterations.....................: 70      6.330433/s
     vus............................: 1       min=1      max=10
     vus_max........................: 10      min=10     max=10

