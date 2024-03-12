import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import VideoCardItem from '../VideoCardItem'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SavedVideosContainer,
  LeftAndRightHolder,
  LeftSection,
  RightSection,
  HeadingHolder,
  FireIconHolder,
  Title,
  SavedVideosList,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  Icon,
  IconsContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      return (
        <SavedVideosContainer isDark={isDarkTheme}>
          <Header />
          <LeftAndRightHolder>
            <LeftSection isDark={isDarkTheme}>
              <NavigationBar />
              <ContactUsSection>
                <ContactUsTitle isDark={isDarkTheme}>CONTACT US</ContactUsTitle>
                <IconsContainer>
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Icon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <ContactUsText isDark={isDarkTheme}>
                  Enjoy! Now to see your
                  <br />
                  channels and <br />
                  recommendations!
                </ContactUsText>
              </ContactUsSection>
            </LeftSection>
            <RightSection data-testid="savedVideos" isDark={isDarkTheme}>
              <HeadingHolder isDark={isDarkTheme}>
                <FireIconHolder isDark={isDarkTheme}>
                  <HiFire size="35" color="#ff0000" />
                </FireIconHolder>
                <Title isDark={isDarkTheme}>Saved Videos</Title>
              </HeadingHolder>
              {savedVideos.length > 0 ? (
                <SavedVideosList>
                  {savedVideos.map(eachVideo => (
                    <VideoCardItem
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </SavedVideosList>
              ) : (
                <NoSavedVideosContainer isDark={isDarkTheme}>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading isDark={isDarkTheme}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosText isDark={isDarkTheme}>
                    You can save your videos while watching them
                  </NoSavedVideosText>
                </NoSavedVideosContainer>
              )}
            </RightSection>
          </LeftAndRightHolder>
        </SavedVideosContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
