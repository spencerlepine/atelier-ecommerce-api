
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


running (01.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  10% ] 10 VUs  01.0s/10s

running (02.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  20% ] 10 VUs  02.0s/10s

running (03.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  30% ] 10 VUs  03.0s/10s

running (04.0s), 10/10 VUs, 0 complete and 0 interrupted iterations
default   [  40% ] 10 VUs  04.0s/10s

running (05.0s), 10/10 VUs, 3 complete and 0 interrupted iterations
default   [  50% ] 10 VUs  05.0s/10s

running (06.0s), 10/10 VUs, 5 complete and 0 interrupted iterations
default   [  60% ] 10 VUs  06.0s/10s

running (06.9s), 10/10 VUs, 5 complete and 0 interrupted iterations
default   [  69% ] 10 VUs  06.9s/10s

running (07.0s), 10/10 VUs, 5 complete and 0 interrupted iterations
default   [  70% ] 10 VUs  07.0s/10s

running (07.1s), 10/10 VUs, 5 complete and 0 interrupted iterations
default   [  71% ] 10 VUs  07.1s/10s

running (08.0s), 10/10 VUs, 7 complete and 0 interrupted iterations
default   [  80% ] 10 VUs  08.0s/10s

running (08.0s), 10/10 VUs, 7 complete and 0 interrupted iterations
default   [  80% ] 10 VUs  08.0s/10s

running (09.0s), 10/10 VUs, 7 complete and 0 interrupted iterations
default   [  90% ] 10 VUs  09.0s/10s

running (10.0s), 10/10 VUs, 9 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (11.0s), 09/10 VUs, 10 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (12.0s), 06/10 VUs, 13 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (13.0s), 05/10 VUs, 14 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (14.0s), 03/10 VUs, 16 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (15.0s), 01/10 VUs, 18 complete and 0 interrupted iterations
default ↓ [ 100% ] 10 VUs  10s

running (15.1s), 00/10 VUs, 19 complete and 0 interrupted iterations
default ✓ [ 100% ] 10 VUs  10s

     ✓ success

     checks.........................: 100.00% ✓ 19       ✗ 0   
     data_received..................: 9.0 kB  597 B/s
     data_sent......................: 1.9 kB  127 B/s
     http_req_blocked...............: avg=579.94µs min=1µs   med=935µs max=1.19ms p(90)=1.15ms  p(95)=1.18ms  
     http_req_connecting............: avg=211.94µs min=0s    med=348µs max=451µs  p(90)=445.4µs p(95)=447.4µs 
     http_req_duration..............: avg=6.76s    min=4.53s med=6.61s max=11.62s p(90)=9.74s   p(95)=10.52s  
       { expected_response:true }...: avg=6.76s    min=4.53s med=6.61s max=11.62s p(90)=9.74s   p(95)=10.52s  
     http_req_failed................: 0.00%   ✓ 0        ✗ 19  
     http_req_receiving.............: avg=103.15µs min=38µs  med=73µs  max=450µs  p(90)=131.4µs p(95)=211.49µs
     http_req_sending...............: avg=23.05µs  min=11µs  med=17µs  max=68µs   p(90)=38µs    p(95)=59µs    
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s    max=0s     p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=6.76s    min=4.53s med=6.61s max=11.62s p(90)=9.74s   p(95)=10.52s  
     http_reqs......................: 19      1.254978/s
     iteration_duration.............: avg=6.76s    min=4.53s med=6.62s max=11.62s p(90)=9.74s   p(95)=10.52s  
     iterations.....................: 19      1.254978/s
     vus............................: 1       min=1      max=10
     vus_max........................: 10      min=10     max=10

