import React from 'react'

import { useSpring, animated } from 'react-spring'
import './card.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`


export default function Card() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="row" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

            <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2), }} />
            <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />




        </div >
    )
}