import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`
export const LeftAndRightHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  margin-top: 0px;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 90vh;
  width: 250px;
  margin: 0px;
  position: fixed;
  justify-content: space-between;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  margin-left: 250px;
  background-color: ${props => (props.isDark ? '#000000' : '#f1f1f1')};
  @media screen and (max-width: 767px) {
    margin: 0px;
    width: 100%;
  }
`
export const ContactUsSection = styled.div`
  display: 'flex';
  flex-direction: column;
  width: 80%;
  padding: 10px;
`
export const ContactUsTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const ContactUsText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-top: 0px;
`
export const Icon = styled.img`
  height: 15px;
  width: 15px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  margin-top: 0px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const FailureImage = styled.img`
  height: 200px;
  width: 200px;
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const FailureViewText = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  background-color: #4169e1;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 15px;
  border-radius: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 566px) {
    height: 27px;
    width: 80px;
  }
  @media screen and (max-width: 767px) {
    height: 31px;
    width: 90px;
  }
`
export const VideoItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  list-style-type: none;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const ResponsiveContainer = styled.div`
  display: flex;
`
export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const ChannelName = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const ChannelSubscribers = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`
export const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
`
export const ViewsAndYearsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 70%;
`
export const LikeDislikeAndSaveIconsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`
export const VideoText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#f8fafc' : '#383838')};
  margin-top: 0px;
  margin-bottom: 0px;
`

export const Line = styled.hr`
  width: 100%;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 10px;
`
export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const BottomLeftSection = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`
export const BottomRightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const TextDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? '#f8fafc' : '#383838')};
  margin-top: 15px;
`
export const ButtonElement = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  margin-right: 10px;
`
