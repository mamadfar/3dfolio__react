import {ComponentType} from "react";
import {motion, Variants} from "framer-motion";
import {staggerContainer} from "../utils/motion";
import {styles} from "../styles";

const SectionWrapper = <T, >(Component: ComponentType<T>, idName: string) => {
    return (props: any) => {
        return (
            <motion.section variants={staggerContainer() as Variants} initial="hidden" whileInView="show"
                            viewport={{once: true, amount: 0.25}}
                            className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
                <span className="block w-full -mb-[100px] pb-[100px]">&nbsp;</span>
                <span className="hash-span" id={idName}>&nbsp;</span>
                <Component {...props}/>
            </motion.section>
        )
    }

};

export default SectionWrapper;
