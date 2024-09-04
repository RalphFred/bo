"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

import styles from "./style.module.scss";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">What's your name?</label>
            <input {...register("fullName")} placeholder="Musa Emmanuel *" />
            <p className={styles.errors}>{errors.fullName?.message}</p>
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="email">What's your email?</label>
            <input
              {...register("email")}
              placeholder="musaemmanuel@gmail.com *"
              name="email"
            />
            <p className={styles.errors}>{errors.email?.message}</p>
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="message">What's your email?</label>
            <textarea
              {...register("message")}
              placeholder="Hello Bolu, I'd like to enquire about your mentorship *"
              name="message"
            />
            <p className={styles.errors}>{errors.message?.message}</p>
          </div>

          <motion.button
            type="submit"
            style={{ x }}
            className={styles.buttonContainer}
          >
            <Rounded backgroundColor={"#8b8471"} className={styles.button}>
              <p>Send</p>
            </Rounded>
          </motion.button>
        </form>

        <div className={styles.contactInfo}>
          <div>
            <h4>Contact Details</h4>
            <p>bolex@gmail.com</p>
            <p>234 704 094 4615</p>
          </div>

          <div>
            <h4>Socials</h4>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <span>
            <p>© 2024 Boluwaduro. All rights reserved.</p>
          </span>
        </div>
        <div className={styles.socials}>
          <span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
          </span>
          <Magnetic>
            <p>LinkedIn</p>
          </Magnetic>
          <Magnetic>
            <p>Youtube</p>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
