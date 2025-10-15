export const dIpad =
`M${dimension.width / 3} ${dimension.height / 4}
q0 -20 20 -20
L${dimension.width / 3 * 2} ${dimension.height / 4 - 20}
q20 0 20 20
L${dimension.width / 3 * 2 + 20} ${dimension.height * 0.8}
q0 20 -20 20
L${dimension.width / 3 + 20} ${dimension.height * 0.8 + 20}
q-20 0 -20 -20
z
`
export const dPhone =
`M${dimension.width / 5} ${dimension.height / 6}
q0 -20 20 -20
L${dimension.width / 1.3} ${dimension.height / 6 - 20}
q20 0 20 20
L${dimension.width / 1.3 + 20} ${dimension.height * 0.8}
q0 20 -20 20
L${dimension.width / 5 + 20} ${dimension.height * 0.8 + 20}
q-20 0 -20 -20
z
`

export const pathD = () => {
    const width = dimension.width * 0.8
    const height = dimension.height * 0.6
    const x = (dimension.width - width) / 2
    const y = (dimension.height - height) / 2
    const radius = Math.min(width, height) * 0.1

    return `
      M${x + radius} ${y}
      L${x + width - radius} ${y}
      Q${x + width} ${y} ${x + width} ${y + radius}
      L${x + width} ${y + height - radius}
      Q${x + width} ${y + height} ${x + width - radius} ${y + height}
      L${x + radius} ${y + height}
      Q${x} ${y + height} ${x} ${y + height - radius}
      L${x} ${y + radius}
      Q${x} ${y} ${x + radius} ${y}
      Z
    `
  }

export const diff =
  `
      M${dimension.width * 0.3} ${dimension.height * 0.1}
      Q
      ${(((dimension.width * 0.3) + (dimension.width * (0.3 + dimension.height * 0.00002))) / 2) * (1 - (0.13 * 0.15384615386))} ${(((dimension.height * 0.1) + (dimension.height * (0.1 - dimension.height * 0.00002))) / 2) * (1 - 0.13)}
      ${dimension.width * (0.3 + dimension.height * 0.00002)} ${dimension.height * (0.1 - dimension.height * 0.00002)}
      L${dimension.width * 0.7} ${dimension.height * 0.2}
      Q
      ${(((dimension.width * 0.7) + (dimension.width * (0.7 + dimension.height * 0.00002))) / 2) * (1 + (0.032 * 0.15384615386))} ${(((dimension.height * 0.2) + (dimension.height * (0.2 + dimension.height * 0.00002))) / 2) * (1 - 0.032)}
      ${dimension.width * (0.7 + dimension.height * 0.00002)} ${dimension.height * (0.2 + dimension.height * 0.00002)}
      L${dimension.width * 0.9} ${dimension.height * 0.7}
      Q
      ${(((dimension.width * 0.9) + (dimension.width * (0.9 - dimension.height * 0.00002))) / 2) * (1 + (0.08 * 0.15384615386))} ${(((dimension.height * 0.7) + (dimension.height * (0.7 + dimension.height * 0.00002))) / 2) * (1 + 0.008)}
      ${dimension.width * (0.9 - dimension.height * 0.00002)} ${dimension.height * (0.7 + dimension.height * 0.00002)}
      L${dimension.width * 0.2} ${dimension.height * 0.9}
      Q
      ${(((dimension.width * 0.2) + (dimension.width * (0.2 - dimension.height * 0.00002))) / 2) * (1 - (0.4 * 0.15384615386))} ${(((dimension.height * 0.9) + (dimension.height * (0.9 - dimension.height * 0.00002))) / 2) * (1 + 0.02)}
      ${dimension.width * (0.2 - dimension.height * 0.00002)} ${dimension.height * (0.9 - dimension.height * 0.00002)}
      z
  `

export const initial =
  `
      M${dimension.width / 4} ${dimension.height / 3.4}
      q0 -20 20 -20
      L${dimension.width / 1.36} ${dimension.height / 3.4 - 20}
      q20 0 20 20
      L${dimension.width / 1.36 + 20} ${dimension.height * 0.7}
      q0 20 -20 20
      L${dimension.width / 4 + 20} ${dimension.height * 0.7 + 20}
      q-20 0 -20 -20
      z
  `

export const diffarchive =
  `
      M${dimension.width * 0.3} ${dimension.height * 0.1}
      Q
      ${dimension.width * (0.3 + 0.0044)} ${dimension.height * (0.1 - 0.022)}
      ${dimension.width * (0.3 + 0.02)} ${dimension.height * (0.1 - 0.02)}
      L${dimension.width * 0.7} ${dimension.height * 0.2}
      Q
      ${dimension.width * (0.7 + 0.015)} ${dimension.height * (0.2 + 0.003)}
      ${dimension.width * (0.7 + 0.02)} ${dimension.height * (0.2 + 0.02)}
      L${dimension.width * 0.9} ${dimension.height * 0.7}
      Q
      ${dimension.width * (0.9 + 0.004)} ${dimension.height * (0.7 + 0.017)}
      ${dimension.width * (0.9 - 0.02)} ${dimension.height * (0.7 + 0.022)}
      L${dimension.width * 0.2} ${dimension.height * 0.9}
      Q
      ${dimension.width * (0.2 - 0.023)} ${dimension.height * (0.9 + 0.01)}
      ${dimension.width * (0.2 - 0.02)} ${dimension.height * (0.9 - 0.02)}
      z
  `

export const initial = () => {
    const p1 = {
        x: 0.3,
        y: 0.1,
    }
    const p2 = {
        x: 0.7,
        y: 0.2,
    }
    const p3 = {
        x: 0.9,
        y: 0.7,
    }
    const p4 = {
        x: 0.2,
        y: 0.9,
    }
    const radius = 10
    const smooth = 1

    return `
    M${(dimension.width * p1.x) - radius} ${(dimension.height * p1.y) + radius}
    Q
    ${(dimension.width * p1.x) - radius / smooth} ${(dimension.height * p1.y) - radius}
    ${(dimension.width * p1.x) + radius} ${(dimension.height * p1.y) - radius}
    L${(dimension.width * p2.x) - radius} ${(dimension.height * p2.y) - radius}
    Q
    ${(dimension.width * p2.x) + radius / smooth} ${(dimension.height * p2.y)}
    ${((dimension.width * p2.x) + radius)} ${(dimension.height * p2.y) + radius}
    L${(dimension.width * p3.x) + radius} ${(dimension.height * p3.y) - radius}
    Q
    ${(dimension.width * p3.x) + radius} ${(dimension.height * p3.y) + radius / smooth}
    ${(dimension.width * p3.x) - radius} ${(dimension.height * p3.y) + radius}
    L${(dimension.width * p4.x) + radius} ${(dimension.height * p4.y) + radius}
    Q
    ${(dimension.width * p4.x) - radius / smooth} ${(dimension.height * p4.y) + radius}
    ${(dimension.width * p4.x) - radius} ${(dimension.height * p4.y) - radius}
    Z
`
}

export const right = () => {
  const p1 = {
      x: 0.3 + 0.02,
      y: 0.1,
      borderX: 0.13,
      borderY: 0.13
  }
  const p2 = {
      x: 0.7 - 0.02,
      y: 0.2,
      borderX: 0.032,
      borderY: 0.032
  }
  const p3 = {
      x: 0.9 - 0.02,
      y: 0.7,
      borderX: 0.08,
      borderY: 0.008
  }
  const p4 = {
      x: 0.2 + 0.02,
      y: 0.9,
      borderX: 0.4,
      borderY: 0.02
  }
  const radius = 0.00002
  const ascept = 0.15384615386

  return `
  M${dimension.width * p1.x} ${dimension.height * p1.y}
  Q
  ${(((dimension.width * p1.x) + (dimension.width * (p1.x + dimension.height * radius))) / 2) * (1 - (p1.borderX * ascept))} ${(((dimension.height * p1.y) + (dimension.height * (p1.y - dimension.height * radius))) / 2) * (1 - p1.borderY)}
  ${dimension.width * (p1.x + dimension.height * radius)} ${dimension.height * (p1.y - dimension.height * radius)}
  L${dimension.width * p2.x} ${dimension.height * p2.y}
  Q
  ${(((dimension.width * p2.x) + (dimension.width * (p2.x + dimension.height * radius))) / 2) * (1 + (p2.borderX * ascept))} ${(((dimension.height * p2.y) + (dimension.height * (p2.y + dimension.height * radius))) / 2) * (1 - p2.borderY)}
  ${dimension.width * (p2.x + dimension.height * radius)} ${dimension.height * (p2.y + dimension.height * radius)}
  L${dimension.width * p3.x} ${dimension.height * p3.y}
  Q
  ${(((dimension.width * p3.x) + (dimension.width * (p3.x - dimension.height * radius))) / 2) * (1 + (p3.borderX * ascept))} ${(((dimension.height * p3.y) + (dimension.height * (p3.y + dimension.height * radius))) / 2) * (1 + p3.borderY)}
  ${dimension.width * (p3.x - dimension.height * radius)} ${dimension.height * (p3.y + dimension.height * radius)}
  L${dimension.width * p4.x} ${dimension.height * p4.y}
  Q
  ${(((dimension.width * p4.x) + (dimension.width * (p4.x - dimension.height * radius))) / 2) * (1 - (p4.borderX * ascept))} ${(((dimension.height * p4.y) + (dimension.height * (p4.y - dimension.height * radius))) / 2) * (1 + p4.borderY)}
  ${dimension.width * (p4.x - dimension.height * radius)} ${dimension.height * (p4.y - dimension.height * radius)}
  Z
`
}

M${(dimension.width * p1.x) - radius} ${(dimension.height * p1.y) + radius}
Q
${(dimension.width * p1.x) - radius / smooth} ${(dimension.height * p1.y) - radius}
${(dimension.width * p1.x) + radius} ${(dimension.height * p1.y) - radius}
L${(dimension.width * p2.x) - radius} ${(dimension.height * p2.y) - radius}
Q
${(dimension.width * p2.x) + radius / smooth} ${(dimension.height * p2.y) - radius}
${((dimension.width * p2.x) + radius)} ${(dimension.height * p2.y) + radius}
L${(dimension.width * p3.x) + radius} ${(dimension.height * p3.y) - radius}
Q
${(dimension.width * p3.x) + radius / smooth} ${(dimension.height * p3.y) + radius}
${(dimension.width * p3.x) - radius} ${(dimension.height * p3.y) + radius}
L${(dimension.width * p4.x) + radius} ${(dimension.height * p4.y) + radius}
Q
${(dimension.width * p4.x) - radius / smooth} ${(dimension.height * p4.y) + radius}
${(dimension.width * p4.x) - radius} ${(dimension.height * p4.y) - radius}
Z

        //controls
        const control1 = {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        }

        const control2 = {
            x: (p2.x + p3.x) / 2,
            y: (p2.y + p3.y) / 2
        }

        const control3 = {
            x: (p3.x + p4.x) / 2,
            y: (p3.y + p4.y) / 2
        }


        /// don't touch
        const fixLeftTop = p1.x > p4.x ? 2 : 1
        const fixLeftBottom = p1.x > p4.x ? 1 : 2
        const fixRightTop = p2.x > p3.x ? 2 : 1
        const fixRightBottom = p3.x > p2.x ? 2 : 1

export const initial = () => {
            //settings
            const p1 = {
                x: 0.3,
                y: 0.1,
            }
            const p2 = {
                x: 0.7,
                y: 0.2,
            }
            const p3 = {
                x: 0.9,
                y: 0.7,
            }
            const p4 = {
                x: 0.2,
                y: 0.9,
            }
            // square
            // const p1 = {
            //     x: 0.3,
            //     y: 0.3,
            // }
            // const p2 = {
            //     x: 0.7,
            //     y: p1.x,
            // }
            // const p3 = {
            //     x: p2.x,
            //     y: p2.x,
            // }
            // const p4 = {
            //     x: p1.x,
            //     y: p2.x,
            // }
            const radius = dimension.width / 1000
            const smooth = 1
    
            /// don't touch
            const fixLeftTop = p1.x > p4.x ? 2 : 1
            const fixLeftBottom = p1.x > p4.x ? 1 : 2
            const fixRightTop = p2.x > p3.x ? 1 : 2
            const fixRightBottom = p2.x > p3.x ? 2 : 1
    
            //core
            return `
            M${(dimension.width * p1.x) - radius} ${(dimension.height * p1.y) + radius}
            Q
            ${(dimension.width * p1.x) - radius / smooth / fixLeftTop} ${(dimension.height * p1.y) - radius}
            ${(dimension.width * p1.x) + radius} ${(dimension.height * p1.y) - radius}
            L${(dimension.width * p2.x) - radius} ${(dimension.height * p2.y) - radius}
            Q
            ${(dimension.width * p2.x) + radius / smooth / fixRightTop} ${(dimension.height * p2.y) - radius / fixRightTop}
            ${((dimension.width * p2.x) + radius)} ${(dimension.height * p2.y) + radius}
            L${(dimension.width * p3.x) + radius} ${(dimension.height * p3.y) - radius}
            Q
            ${(dimension.width * p3.x) + radius / smooth} ${(dimension.height * p3.y) + radius / fixRightBottom}
            ${(dimension.width * p3.x) - radius} ${(dimension.height * p3.y) + radius}
            L${(dimension.width * p4.x) + radius} ${(dimension.height * p4.y) + radius}
            Q
            ${(dimension.width * p4.x) - radius / smooth / fixLeftBottom} ${(dimension.height * p4.y) + radius}
            ${(dimension.width * p4.x) - radius} ${(dimension.height * p4.y) - radius}
            Z
        `
        }

        //settings
        // const p1 = {
        //     x: 0.1,
        //     y: 0.1,
        // }
        // const p2 = {
        //     x: 0.7,
        //     y: 0.2,
        // }
        // const p3 = {
        //     x: 0.9,
        //     y: 0.7,
        // }
        // const p4 = {
        //     x: 0.2,
        //     y: 0.9,
        // }
        // square