import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingVideoContainer,
  TrendingThumbnail,
  VideoProfileAndDetailsSection,
  TrendingProfile,
  VideoDetailsSection,
  VideoTitle,
  ChannelName,
  ChannelNameAndViewsSection,
  Views,
} from './styledComponents'

const VideoCardItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  const dateString = new Date(publishedAt)
  const year = dateString.getFullYear()
  const month = dateString.getMonth()
  const date = dateString.getDate()

  const formattedDate = formatDistanceToNow(new Date(year, month, date))
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`}>
            <TrendingVideoContainer>
              <TrendingThumbnail src={thumbnailUrl} alt="thumbnail" />
              <VideoProfileAndDetailsSection>
                <TrendingProfile
                  src={channelProfileImageUrl}
                  alt="channel profile"
                />
                <VideoDetailsSection>
                  <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                  <ChannelNameAndViewsSection>
                    <ChannelName isDark={isDarkTheme}>
                      {channelName}
                    </ChannelName>
                    <Views isDark={isDarkTheme}>
                      {viewCount} views . {formattedDate}
                    </Views>
                  </ChannelNameAndViewsSection>
                </VideoDetailsSection>
              </VideoProfileAndDetailsSection>
            </TrendingVideoContainer>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoCardItem
