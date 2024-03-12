import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeVideo: () => {},
})

export default ThemeAndVideoContext
