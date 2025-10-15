export const calculateDistance = angle => {
  const fixbug = 100
  const centerX = dimension.width / 2
  const centerY = dimension.height / 3
  const radian = (angle * Math.PI) / 180
  const x = radius * Math.cos(radian) + centerX
  const y = radius * Math.sin(radian) + centerY
  return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
}

export const findClosestAngle = targetAngle => {
  let closestAngle = targetAngle
  let minDistance = calculateDistance(targetAngle)

  for (let i = 0; i < 360; i += 360 / (total / round)) {
    const distance = calculateDistance(i)
    if (distance < minDistance) {
      minDistance = distance
      closestAngle = i
    }
  }

  return closestAngle
}

export const handleTitleClick = angle => {
  if (isDragging) return
  const closestAngle = findClosestAngle(angle)
  const newRotation = -closestAngle + 90
  setRotation(newRotation)
  setClosestLineIndex(Math.round(closestAngle / (360 / (total / round))))
}
