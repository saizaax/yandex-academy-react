export const initialState = {
  builds: {
    history: [],
    page: 1,
    isMore: true,
  },
  settings: {
        repository: "",
        command: "npm ci && npm run build",
        branch: "master |",
        syncInterval: 10,
      },
  environment: {
    overlay: false,
  },
}
