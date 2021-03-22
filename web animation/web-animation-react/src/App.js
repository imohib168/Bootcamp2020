// import React, { useEffect, useRef } from 'react'
// import useWebAnimations from "@wellyshen/use-web-animations";

// const App = () => {

//     // const inputEl = useRef(null);

//     // useEffect(() => {
//     //     inputEl.current.focus();
//     // }, [])

//     // return (
//     //     <div>
//     //         <h1>Hello World</h1> <br />
//     //         <input type="text" ref={inputEl} />
//     //     </div>
//     // )

//     const { ref, playState, getAnimation } = useWebAnimations({
//         keyframes: {
//             transform: "translateX(500px)", // Move by 500px
//             // background: ["red", "blue", "green"], // Go through three colors
//         }, timing: {
//             delay: 500, // Start with a 500ms delay
//             duration: 1000, // Run for 1000ms
//             iterations: 5, // Repeat once
//             direction: "alternate", // Run the animation forwards and then backwards
//             easing: "ease-in", // Use a fancy timing function
//         },
//         onReady: ({ playState, animate, animation }) => {
//             // Triggered when the animation is ready to play (Google Chrome: available in v84+)
//         },
//         onUpdate: ({ playState, animate, animation }) => {
//             // Triggered when the animation enters the running state or changes state
//         },
//         onFinish: ({ playState, animate, animation }) => {
//             // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
//         },
//         // More useful options...
//     })

//     return (
//         <div className="container">
//             <p>🍿 Animation is {playState}</p>
//             <div ref={ref}>
//                 <h3>Mohib</h3>
//             </div>

//             <button onClick={() =>
//                 getAnimation().play()
//             }
//             >
//                 Play
//             </button>

//             <button onClick={() =>
//                 getAnimation().pause()
//             }
//             >
//                 Pause
//             </button>

//         </div>
//     )
// }

// export default App;