import Button from "./components/Button/Button"
import "./styles.scss"

import { ReactComponent as SettingsIcon } from "./icons/settings.svg"
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg"

import Input from "./components/Input/Input"
import { useState } from "react"
import Header from "./components/Header/Header"
import RepoHeader from "./components/RepoHeader/RepoHeader"
import Footer from "./components/Footer/Footer"
import Meta from "./components/Meta/Meta"
import Status from "./components/Status/Status"
import CommitCard from "./components/CommitCard/CommitCard"

function App() {
  const [input, setInput] = useState()

  return (
    <>
      <div className="App">
        <h3>Components</h3>

        <Header title="School CI server" />
        <RepoHeader title="philip1967/my-awesome-repo-with-long-long-long-repo-name" />

        <Footer />

        <Status
          variant="success"
          number={1337}
          title="add documentation for postgres scaler"
        />
        <Status
          variant="warning"
          number={1337}
          title="add documentation for postgres scaler"
        />
        <Status
          variant="error"
          number={1337}
          title="add documentation for postgres scaler"
        />

        <CommitCard
          variant="warning"
          number={1337}
          title="add documentation for postgres scaler"
          author="Philip Kirkorov"
          branch="master"
          commit="9c9f0b9"
          date="21 янв, 03:06"
          time="1 ч 20 мин"
        />

        <Meta icon={<CalendarIcon />} text="Text" info="Text" />
        <Meta icon={<CalendarIcon />} text="Text" variant="secondary" />

        <Input
          label="Text Field"
          placeholder="Placeholder"
          value={input}
          setValue={setInput}
        />
        <Input
          variant="default"
          label="Text Field"
          placeholder="Placeholder"
          isRequired={true}
          value={input}
          setValue={setInput}
        />
        <Input
          variant="small"
          label="Text Field"
          placeholder="10"
          labelValue="value"
          value={input}
          setValue={setInput}
        />
        <Input
          variant="small"
          label="Text Field"
          labelValue="value"
          defaultValue={10}
          value={input}
          setValue={setInput}
        />

        <Button>Cancel</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="disabled">Cancel</Button>
        <Button variant="transparent">Cancel</Button>
        <Button variant="icon-regular" icon={<SettingsIcon />}>
          Settings
        </Button>
        <Button variant="icon-small" icon={<SettingsIcon />}></Button>
      </div>
    </>
  )
}

export default App
