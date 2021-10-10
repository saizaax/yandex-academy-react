import { useSelector } from "react-redux"

import History from "../layout/history"
import Start from "../layout/start"

function Root() {
  const settings = useSelector((store) => store.settings)

  return <>{settings.repository ? <History /> : <Start />}</>
}

export default Root
