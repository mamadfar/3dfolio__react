import {VerticalTimeline} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import {SectionWrapper} from "../../hoc";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../../styles";
import {experiences} from "../../constants";
import {textVariant} from "../../utils/motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(experience => (
              <ExperienceCard key={experience.id} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");
