

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GamingCard,
  ThumbnailImage,
  GameTitle,
  ViewCountText,
} from './styledComponents'

const GamingCardItem = props => {
  const {gameCardDetails} = props

  const {id, title, thumbnailUrl, viewCount} = gameCardDetails
  return (
    <ItemLink to={`/videos/${id}`} className="link">
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingCard isDark={isDarkTheme}>
              <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <GameTitle isDark={isDarkTheme}>{title}</GameTitle>
              <ViewCountText isDark={isDarkTheme}>
                {viewCount} Watching Worldwide
              </ViewCountText>
            </GamingCard>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    </ItemLink>
  )
}

export default GamingCardItem
