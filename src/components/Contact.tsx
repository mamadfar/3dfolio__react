import {useState, useRef, FormEvent, ChangeEvent} from 'react';
import {motion} from "framer-motion";
import emailJs from "@emailjs/browser";
import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";
import {Input} from "./index";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            VITE_EMAIL_SERVICE_ID,
            VITE_EMAIL_TEMPLATE_ID,
            VITE_EMAIL_PUBLIC_KEY,
            VITE_EMAIL_TO_NAME,
            VITE_EMAIL
        } = import.meta.env;
        setLoading(true);
        emailJs.send(
            VITE_EMAIL_SERVICE_ID as string,
            VITE_EMAIL_TEMPLATE_ID as string,
            {
                from_name: form.name,
                to_name: VITE_EMAIL_TO_NAME as string,
                from_email: form.email,
                to_email: VITE_EMAIL as string,
                message: form.message
            },
            VITE_EMAIL_PUBLIC_KEY as string
        ).then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.")
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }, (e) => {
            setLoading(false);
            console.log(e);
            alert("Something went wrong.")
        });
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 mt-12">
                    <Input name="name" label="Your Name" value={form.name} placeholder="What's your name?" type="text"
                           onChange={handleChange}/>
                    <Input name="email" label="Your Email" value={form.email} placeholder="What's your email?"
                           type="email" onChange={handleChange}/>
                    <Input isTextArea name="message" label="Your Message" value={form.message}
                           placeholder="What do you want to say?" onChange={handleChange}/>
                    <button
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? "Sending..." : "Send"}</button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");
