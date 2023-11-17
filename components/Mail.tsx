import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
//for emailjs widget

const Mail = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}
      className="flex flex-col space-y-4">
        <div>
          <label>Name:</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Mail;
