"use client"
import { useState } from "react";
import { toast } from "sonner";
import {Section} from "@/app/components/SectionAnimation"
import FormTypes from "../types/formTypes";


const Contact = () => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errors, setErrors] = useState<FormTypes>({
    nameInput: "",
    emailInput: "",
    messageInput: "",
    });
  const [formData, setFormData] = useState<FormTypes>({
    nameInput: "",
    emailInput: "",
    messageInput: "",
  });
  
const submitForm = async () => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({
        nameInput: formData.nameInput,
        emailInput: formData.emailInput,
        messageInput: formData.messageInput,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      toast.error("Chyba pri odosielaní. Skúste to prosím znovu.");
      return;
    }

    toast.success("Správa bola úspešne odoslaná.");

    setFormData({
      nameInput: "",
      emailInput: "",
      messageInput: "",
    });

  } catch (error) {
      toast.error("Chyba pri odosielaní. Skúste to prosím znovu.");
      console.log(error)
  }
};

const validate = () => {
    const newErrors = {} as FormTypes;

    if (!formData.nameInput.trim())
      newErrors.nameInput = "Vyplňte meno.";

    if (!formData.emailInput.trim())
      newErrors.emailInput = "Vyplňte email.";
    else if (!emailPattern.test(formData.emailInput))
      newErrors.emailInput = "Neplatný email.";

    if (!formData.messageInput.trim())
      newErrors.messageInput = "Vyplňte správu.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("clicked")
      submitForm();
    }
};


  return (
    <Section>
    <div id="Contact">
      <div className="relative pt-[10em] xl:pt-[20em] min-h-screen">
        <h2 className="absolute top-0 left-[50%] translate-x-[-50%] font-bold text-[50px] xl:text-[200px] text-neutral-800/20 -z-10 pointer-events-none select-none whitespace-nowrap tracking-widest">
          {"<"}contact{">"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-3 mx-auto w-full lg:max-w-[70vw]">
          <div className="flex flex-col lg:flex-row gap-3 w-full items-center justify-center">

            <input className={`border caret-white text-white h-[50px] pl-5 text-2xl w-[90%] lg:w-[50%] mx-auto ${errors.nameInput ? "border-red-700" : "border-neutral-800"}`}
              type="text"
              value={formData.nameInput}
              onChange={(e) => setFormData({ ...formData, nameInput: e.target.value })}
              placeholder="Your Name" />
            
            <input className={`border caret-white text-white h-[50px] pl-5 text-2xl w-[90%] lg:w-[50%] mx-auto ${errors.emailInput ? "border-red-700" : "border-neutral-800"}`}
              type="email"
              value={formData.emailInput}
              onChange={(e) => setFormData({ ...formData, emailInput: e.target.value })}
              placeholder="Your Email" />
          </div>
          
          <textarea className={`border caret-white text-white h-[100px] pl-5 pt-2 text-2xl w-[90%] lg:w-full mx-auto resize-none ${errors.messageInput ? "border-red-700" : "border-neutral-800"}`}
            value={formData.messageInput} onChange={(e) => setFormData({ ...formData, messageInput: e.target.value })}
            placeholder="Your Message" />
          
          <button className="bg-transparent border border-neutral-800 text-neutral-200 font-bold py-2 px-4 text-2xl rounded hover:border-(--primary-color) hover:text-(--primary-color) cursor-pointer" type="submit">Send Message</button>
        </form>
      </div>
      </div>
      </Section>
  );
};

export default Contact;