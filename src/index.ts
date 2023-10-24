import { distance } from  "geodesy-fn";


const p1 = [-20.0375726914206, -44.8035032995311]
const p2 = [-20.0374907564832, -44.8036779675501]


const p3 = [-20.0371327776814, -44.8035507867177]
const p4 = [-20.0371744799817, -44.8033647688523]
const d1 = distance(p1, p2); // 404.3 km
const d2 = distance(p3, p4); // 404.3 km

console.log(d1 + " - " + d2 );
