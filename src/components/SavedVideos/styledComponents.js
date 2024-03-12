import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 0px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const LeftAndRightHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
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
  margin-left: 250px;
  background-color: ${props => (props.isDark ? '#000000' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    margin: 0px;
    width: 100%;
  }
`

export const HeadingHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  width: 100vw;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const FireIconHolder = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f8fafc')};
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 23px;
  margin-left: 10px;
`
export const SavedVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
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
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const ContactUsText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const Icon = styled.img`
  height: 30px;
  width: 30px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`
export const NoSavedVideosImage = styled.img`
  height: 200px;
  width: 200px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const NoSavedVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
