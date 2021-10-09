export const formatHoursMinutes = (min) => {
  const hours = Math.floor(min / 60)
  const minutes = min % 60

  return min ? `${hours > 0 ? `${hours} ч ` : ""} ${minutes} мин` : `0 мин`
}
