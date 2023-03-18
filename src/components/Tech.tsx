import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import {BallCanvas} from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(technology => (
          <div key={technology.id} className="w-28 h-28">
            <BallCanvas icon={technology.icon}/>
          </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")
