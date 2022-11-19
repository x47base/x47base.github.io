
function calculateUpTime(downTimeInMinutes) {
    const v = 100 - ((24/100)/60 * downTimeInMinutes)
    return v
}