import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import AlertSec from '../Alert/AlertSec'

import YoutubeVideos from "../YouTube/YoutubeVideos";
import Rating from '../Rating/Rating'
// import styles from "../YouTube/YoutubeVideos";

function Main() {
  return (
    <>
      <AlertSec />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
        {/* <YoutubeVideos /> */}
      <Rating />
    </>
  );
}

export default Main


