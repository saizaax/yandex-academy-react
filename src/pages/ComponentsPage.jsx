import React from "react"

function ComponentsPage() {
  return (
    <div className="components-page">
      <h3>Components</h3>

      {/* Header */}
      <Header title="School CI server" />
      <RepoHeader title="philip1967/my-awesome-repo-with-long-long-long-repo-name" />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <BuildModal />

      {/* Status */}
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

      {/* CommitCard */}
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

      {/* Meta */}
      <Meta icon={<CalendarIcon />} text="Text" info="Text" />
      <Meta icon={<CalendarIcon />} text="Text" variant="secondary" />

      {/* Input */}
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

      {/* Button */}
      <Button>Cancel</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="disabled">Cancel</Button>
      <Button variant="transparent">Cancel</Button>
      <Button variant="icon-regular" icon={<SettingsIcon />}>
        Settings
      </Button>
      <Button variant="icon-small" icon={<SettingsIcon />}></Button>
    </div>
  )
}

export default ComponentsPage
