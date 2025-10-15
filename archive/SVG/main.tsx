import { useState } from "react";
import { useMouseContext } from '../Intro/hook/useMouseContext'

export default function SVG() {
    const { dimension } = useMouseContext()
    const [state, setState] = useState({
      p11x: 0,
      p11y: 0,
    });

    const shape = () => {
      //settings
      const p1 = {
            x: 0.3,
            y: 0.3,
        }
        const p2 = {
            x: 0.7,
            y: 0.3,
        }
        const p3 = {
            x: 0.7,
            y: 0.7,
        }
        const p4 = {
            x: 0.3,
            y: 0.7,
        }
        const radius = dimension.width / 400

        //don't touch
        const threew1 = p1.y > p2.y ? dimension.width / ( 100 * Math.min(p1.x, p1.y) * 10) : 1
        const threew2 = p1.y < p2.y ? dimension.width / ( 100 * Math.min(p2.x, p2.y) * 10) : 1
        const threew3 = p4.y > p3.y ? dimension.width / ( 100 *  Math.min(p3.x, p3.y) * 10) : 1
        const threew4 = p4.y < p3.y ? dimension.width / ( 100 * Math.min(p4.x, p4.y) * 10) : 1
        const threeh1 = p1.y > p2.y ? dimension.height / ( 100 * Math.min(p1.x, p1.y) * 10) : 1
        const threeh2 = p1.y < p2.y ? dimension.height / ( 100 * Math.min(p2.x, p2.y) * 10) : 1
        const threeh3 = p4.y > p3.y ? dimension.height / ( 100 * Math.min(p3.x, p3.y) * 10) : 1
        const threeh4 = p4.y < p3.y ? dimension.height / ( 100 * Math.min(p4.x, p4.y) * 10) : 1

        //core
        return `
        M${(dimension.width * p1.x) - radius} ${(dimension.height * p1.y) + radius}
        Q
        ${(dimension.width * p1.x) - radius / threew1} ${(dimension.height * p1.y) - radius / threeh1}
        ${(dimension.width * p1.x) + radius} ${(dimension.height * p1.y) - radius}
        L${(dimension.width * p2.x) - radius} ${(dimension.height * p2.y) - radius}
        Q
        ${(dimension.width * p2.x) + radius / threew2} ${(dimension.height * p2.y) - radius / threeh2}
        ${((dimension.width * p2.x) + radius)} ${(dimension.height * p2.y) + radius}
        L${(dimension.width * p3.x) + radius} ${(dimension.height * p3.y) - radius}
        Q
        ${(dimension.width * p3.x) + radius / threew3} ${(dimension.height * p3.y) + radius / threeh3}
        ${(dimension.width * p3.x) - radius} ${(dimension.height * p3.y) + radius}
        L${(dimension.width * p4.x) + radius} ${(dimension.height * p4.y) + radius}
        Q
        ${(dimension.width * p4.x) - radius / threew4} ${(dimension.height * p4.y) + radius / threeh4}
        ${(dimension.width * p4.x) - radius} ${(dimension.height * p4.y) - radius}
        Z
    `
    }

    const initial = shape()

    return (
    <svg width={dimension.width} height={dimension.height} className="z-50 absolute size-full" fill="#FFFFFF" stroke="#000000" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="myClipPath">
            <path
                d={`${initial}`}
            />
            </clipPath>
            <path
                d={`${initial}`}
            />
        </defs>
    </svg>
    )
}