const sessionSettings = sessionStorage.getItem("settings")

export const initialState = {
  builds: {
    history: [],
    page: 1,
    isMore: true,
  },
  settings: sessionSettings
    ? JSON.parse(sessionSettings)
    : {
        repository: "",
        command: "npm ci && npm run build",
        branch: "master |",
        syncInterval: 10,
      },
  environment: {
    overlay: false,
  },
}
