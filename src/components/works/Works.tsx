import {motion} from "framer-motion";
import {styles} from "../../styles";
import {SectionWrapper} from "../../hoc";
import {projects} from "../../constants";
import {fadeIn, textVariant} from "../../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                    variants={fadeIn("", "", 0.1, 1)}>
                    Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.
                </motion.p>
            </div>
            <div className="flex flex-wrap justify-center mt-20 gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} index={index} {...project}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "")
