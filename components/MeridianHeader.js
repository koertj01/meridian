import MCard from './MeridianCard'
import Carousel from './MeridianCarousel'

//Component used to draw the custom header for meridian
const MeridianHeader = (props) => {
  return (
    <div className="container py-12">
      <div className="flex auto-cols-auto flex-row">
        <MCard title="Meridian Links" imgSrc="" href="">
          <ul>
            <li>Modpack</li>
            <li>Curseforge</li>
            <li>Modrinth</li>
            <li>Github</li>
          </ul>
        </MCard>
        <MCard title="Meridian Server Info" imgSrc="" href="">
          <ul>
            <li>Server Info</li>
            <li>Verbage Needed from Justin</li>
          </ul>
        </MCard>
        <MCard title="" imgSrc="" href="">
          {/* <p>Insert component to draw screenshots of builds</p> */}
          <Carousel />
        </MCard>
      </div>
    </div>
  )
}

export default MeridianHeader
