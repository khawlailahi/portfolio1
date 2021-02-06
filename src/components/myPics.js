
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './mypics.css'
import my4 from '../images/my4.jpeg'
import my2 from '../images/my2.jpg'
import my3 from '../images/my3.jpg'
import my1 from '../images/my1.jpg'

const slides = [
    { id: 0, url: my4 },
    { id: 1, url: my2 },
    { id: 2, url: my3 },
    { id: 3, url: my1 },
]

export default function MyPics() {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            class="bg"
            style={{ ...props, backgroundImage: `url(${item.url})`, height: "400px" }}
        />
    ))
}


