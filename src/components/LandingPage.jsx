import ForYou from "./landingpage/ForYou"
import LandingContainer from "./landingpage/LandingContainer"
import './landingpage/landingpage.css'
function LandingPage() {
  const image1 = '/images/sun_flower.jpg'
  const image2 = '/images/inflor_flower.jpg'

  return (
    <>
      <LandingContainer image={image1} direction="row-reverse" />
      <ForYou />
      <LandingContainer image={image2} />
      <LandingContainer image={image1} direction="row-reverse" />

    </>

  )
}

export default LandingPage