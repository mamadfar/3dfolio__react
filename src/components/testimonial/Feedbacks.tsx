import {motion} from "framer-motion";
import {styles} from "../../styles";
import {SectionWrapper} from "../../hoc";
import {fadeIn, textVariant} from "../../utils/motion";
import {testimonials} from "../../constants";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-lg">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.id} index={index} {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");
