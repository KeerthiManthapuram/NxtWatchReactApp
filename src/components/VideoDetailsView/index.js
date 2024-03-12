import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiMenuAddFill} from 'react-icons/ri'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoDetailsContainer,
  LeftAndRightHolder,
  LeftSection,
  RightSection,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  Icon,
  IconsContainer,
  FailureViewContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
  LoaderContainer,
  VideoCardContainer,
  ResponsiveContainer,
  VideoTitle,
  ChannelName,
  ChannelSubscribers,
  IconsRow,
  ViewsAndYearsHolder,
  LikeDislikeAndSaveIconsHolder,
  VideoText,
  Line,
  BottomSection,
  BottomLeftSection,
  ProfileImage,
  BottomRightSection,
  TextDesc,
  ButtonElement,
} from './styledComponents'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsView extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetailsView()
  }

  getVideoDetailsView = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwtToken')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.video_details.id,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      thumbnailUrl: data.video_details.thumbnail_url,
      channelName: data.video_details.channel.name,
      channelProfileImageUrl: data.video_details.channel.profile_image_url,
      channelSubscriberCount: data.video_details.channel.subscriber_count,
      viewCount: data.video_details.view_count,
      publishedAt: data.video_details.published_at,
      description: data.video_details.description,
    }
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderContainer = () => (
    <LoaderContainer data-testid='loader'>
      <Loader type='ThreeDots' color='#ffffff' height='50' width='50' />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer isDark={isDarkTheme}>
            <FailureImage src={failureImgUrl} alt='failure view' />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewText>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewText>
            <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderVideoItem = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addSavedVideo, removeVideo} = value
        const {videoDetails, isSaved, isLiked, isDisliked} = this.state
        const {
          id,
          title,
          videoUrl,
          channelName,
          channelProfileImageUrl,
          channelSubscriberCount,
          viewCount,
          publishedAt,
          description,
        } = videoDetails

        const onToggleLikeBtn = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }))
        }

        const onToggleDislikeBtn = () => {
          this.setState(prevState => ({
            isDisliked: !prevState.isDisliked,
            isLiked: false,
          }))
        }

        const addOrRemoveVideo = () => {
          if (isSaved === true) {
            removeVideo(id)
          } else {
            addSavedVideo({...videoDetails, isSaved: true})
          }
        }

        const onToggleSaveBtn = () => {
          this.setState(
            prevState => ({
              isSaved: !prevState.isSaved,
            }),
            addOrRemoveVideo,
          )
        }
        const likeIcon = isLiked ? (
          <AiFillLike color='#3b82f6' size='20' />
        ) : (
          <AiOutlineLike size='20' />
        )
        const dislikeIcon = isDisliked ? (
          <AiFillDislike size='20' color='#3b82f6' />
        ) : (
          <AiOutlineDislike size='20' />
        )

        const dateString = new Date(publishedAt)
        const year = dateString.getFullYear()
        const month = dateString.getMonth()
        const date = dateString.getDate()

        const formattedDate = formatDistanceToNow(new Date(year, month, date))

        return (
          <VideoDetailsContainer>
            <Header />
            <LeftAndRightHolder>
              <LeftSection isDark={isDarkTheme}>
                <NavigationBar />
                <ContactUsSection>
                  <ContactUsTitle isDark={isDarkTheme}>
                    CONTACT US
                  </ContactUsTitle>
                  <IconsContainer>
                    <Icon
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
                      alt='facebook logo'
                    />
                    <Icon
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
                      alt='twitter logo'
                    />
                    <Icon
                      src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
                      alt='linked in logo'
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
              <RightSection isDark={isDarkTheme}>
                <VideoCardContainer isDark={isDarkTheme}>
                  <ResponsiveContainer>
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      height='370px'
                      width='90%'
                    />
                  </ResponsiveContainer>
                  <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                  <IconsRow>
                    <ViewsAndYearsHolder>
                      <VideoText isDark={isDarkTheme}>
                        {viewCount} views .{' '}
                      </VideoText>
                      <VideoText isDark={isDarkTheme}>
                        {formattedDate}
                      </VideoText>
                    </ViewsAndYearsHolder>
                    <LikeDislikeAndSaveIconsHolder>
                      <ButtonElement type='button' onClick={onToggleLikeBtn}>
                        {likeIcon}
                      </ButtonElement>
                      <VideoText isDark={isDarkTheme}>Like</VideoText>
                      <ButtonElement type='button' onClick={onToggleDislikeBtn}>
                        {dislikeIcon}
                      </ButtonElement>
                      <VideoText isDark={isDarkTheme}>Dislike</VideoText>
                      <ButtonElement type='button' onClick={onToggleSaveBtn}>
                        <RiMenuAddFill
                          color={isSaved ? '#3b82f6' : '#181818'}
                        />
                      </ButtonElement>
                      <VideoText isDark={isDarkTheme}>Save</VideoText>
                    </LikeDislikeAndSaveIconsHolder>
                  </IconsRow>
                  <Line isDark={isDarkTheme} />
                  <BottomSection>
                    <BottomLeftSection>
                      <ProfileImage src={channelProfileImageUrl} />
                    </BottomLeftSection>
                    <BottomRightSection>
                      <ChannelName isDark={isDarkTheme}>
                        {channelName}
                      </ChannelName>
                      <ChannelSubscribers isDark={isDarkTheme}>
                        {channelSubscriberCount} subscribers
                      </ChannelSubscribers>
                      <TextDesc isDark={isDarkTheme}>{description}</TextDesc>
                    </BottomRightSection>
                  </BottomSection>
                </VideoCardContainer>
              </RightSection>
            </LeftAndRightHolder>
          </VideoDetailsContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderVideoItem()
      case apiStatusConstants.inProgress:
        return this.renderLoaderContainer()
      default:
        return null
    }
  }

  render() {
    return this.renderSection()
  }
}

export default VideoDetailsView
