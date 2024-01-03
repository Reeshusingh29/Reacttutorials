# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


React fiber info
React Fiber ek internal reconciliation engine hai jo concurrent mode aur interruptible rendering ke sath React applications ko fast aur responsive banane mein madad karta hai.
1.react mai jo .createroot method hai woh  behind the scene mai poora dom like structure create karta hai 
2. jab dom poora poora structure laata hai uskpo page reloading bolte hai 
3. hooke ui ko updation mai help karte hai unke properties ka use karke jaise usestate(),etc....
4. virtual dom ko update karne wali algo hai fiber 
5. fiber mai saara tree update karne ki zarurat nahi hoti 
6. Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
7. fiber ka code thoda hard hota hai 
8. Reconciliation - A high-level description of React's reconciliation algorithm 
9. ye jo reconciliation hai woh kya karti hai ki woh ek recursive algorithm ki tarah hai 
10. ye reconsider karti hai kisko update karna hai kisko nahi karna hai wahi cheez 
11. Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
12. Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
13. fiber algorithm k hisaab se list ki achi performance k liye ham keys ka use karte hai 
14. fiber k andar hamlog kya kya kar sakte hai :- 
pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
