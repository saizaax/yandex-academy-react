import { format } from "date-fns"
import { ru } from "date-fns/esm/locale"

export const formatBuildDate = (timestamp) => {
  const date = new Date(timestamp)

  const dayMonth = format(date, "dd MMM", { locale: ru }).slice(0, -1)
  const hourMinute = format(date, "HH:mm", { locale: ru })

  return `${dayMonth}, ${hourMinute}`
}
