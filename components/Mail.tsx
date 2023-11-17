import React, { FormEvent, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  CheckBadgeIcon,
  CheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
//for emailjs widget

const Mail = () => {
  const [emailSent, setEmailSent] = React.useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehfs3kc",
        "template_jxwrtj2",
        form?.current!,
        "b6CU_1OIxfgRdPztr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
          form.current!.reset();
          //reset send button after submission
          setTimeout(() => {
            setEmailSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 max-w-md"
      >
        <div className="flex flex-col space-y-1">
          <label>Name *</label>
          <input
            required
            type="text"
            name="user_name"
            className="p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Contact *</label>
          <input
            required
            type="text"
            name="user_contact"
            placeholder="Twitter? LinkedIn? or just E-mail?"
            className="p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Message *</label>
          <textarea
            name="message"
            required
            placeholder="Type your message here!"
            className="p-2 rounded-md resize-none w-full h-36 overflow-y-scroll scrollbar-thin
           scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-400 scrollbar-track-transparent 
           scrollbar-thumb-rounded-full outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-100 dark:bg-gray-600 w-fit py-1 px-2 rounded-lg group"
          aria-label="send"
          name="send"
        >
          {emailSent ? (
            <AnimatePresence>
              <motion.span
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0 }}
                className="text-green-500 text-sm"
              >
                Yay!! Message Sent!
              </motion.span>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
            <PaperAirplaneIcon
              className="w-6 h-6 p-1 mx-3 -rotate-45 group-hover:rotate-0 transition
            duration-200 group-hover:text-green-700 dark:group-hover:text-green-300"
            />
            </AnimatePresence>
          )}
        </button>
      </form>
    </div>
  );
};

export default Mail;
