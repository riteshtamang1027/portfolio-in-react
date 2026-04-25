"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";
import axios from "axios";
// import dotenv from 'dotenv';
import { useState } from "react";
import toast from "react-hot-toast";
// dotenv.config()

export default function Contact_section() {
  return (
    <div className="text-[var(--text-primary)] min-h-screen w-full py-12 xl:px-64 lg:px-32 md:px-16 px-8 sm:px-32 bg-[linear-gradient(to_right,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
        className="space-y-8"
      >
        {/* Header */}
        <p className="text-3xl md:text-4xl font-bold text-center text-[var(--text-secondary)]">
          Contact Me
        </p>
        <p className="text-center opacity-80 md:text-base text-sm max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just say hello? Feel
          free to drop a message below or reach out through my social links.
        </p>

        {/* Contact Form + Info Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 rounded-2xl p-8 shadow-lg space-y-8"
          >
            <p className="text-xl font-semibold text-[var(--text-secondary)]">
              Get in Touch
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* left side */}
                  <div className="border p-2.5 w-max rounded-md border-[var(--text-secondary)]/80">
                    <item.icon className="text-[var(--text-secondary)] w-5 h-5" />
                  </div>

                  {/* right side */}
                  <div className="flex-1">
                    <p className="font-medium text-sm opacity-70">
                      {item.label}
                    </p>
                    <p className="font-semibold text-[var(--text-primary)]  ">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}

            <div className="flex flex-col border-t  border-[var(--border-radious)]/30 pt-8">
              <p className="text-sm font-semibold text-[var(--text-secondary)]/80 mb-4 uppercase tracking-wider">
                Follow Me
              </p>
              <div className="flex gap-4 flex-wrap ">
                {socialIcons.map((item, index) => (
                  <motion.div
                    key={index}
                   whileHover={{
                scale: 1.15,
                boxShadow: "var(--shadow-glow)",
              }}
              whileTap={{ scale: 0.95 }}
                    className="p-2.5 border border-[var(--border-radious)] rounded-full hover:text-[var(--text-secondary)] transition"
                  >
                    <Link to={item.url}>
                      <item.icon className="w-5 h-5 text-[var(--text-primary)]/90" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}


           <motion.form
      // onSubmit={onSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 rounded-2xl p-8 shadow-lg space-y-6"
    >
      <p className="text-xl font-semibold text-[var(--text-secondary)]">
        Send a Message
      </p>

      {/* Form Fields */}
      {formFields.map((field, idx) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <label className="text-sm opacity-80 font-medium block mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            
            placeholder={field.placeholder}
            required
            className="w-full p-3 rounded-lg bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 text-sm outline-none focus:border-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--text-secondary)]/20 transition-all"
          />
        </motion.div>
      ))}

      {/* Message Textarea */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="text-sm opacity-80 font-medium block mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          
          placeholder="Write your message..."
          required
          className="w-full p-3 rounded-lg bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-primary)]/50 text-sm outline-none focus:border-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--text-secondary)]/20 transition-all resize-none"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        // disabled={loading}
        className="w-full px-6 py-3 rounded-full bg-[var(--text-secondary)] text-[var(--tooltip-color)] font-semibold hover:bg-transparent hover:text-[var(--text-secondary)] border border-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
      
          <span className="inline-flex items-center gap-2 text-[var(--text-primary)]/90 cursor-pointer">
          
             Send Message
             </span>
        
         
      
      </motion.button>

      {/* Form Hint */}
      <p className="text-xs text-[var(--text-primary)]/50 text-center">
        I'll get back to you as soon as possible!
      </p>
    </motion.form>

          {/* <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--bg-secondary)] border border-[var(--text-secondary)]/20 rounded-2xl p-6 shadow-lg space-y-4"
          >
            <p className="text-xl font-semibold text-[var(--text-secondary)]">
              Send a Message
            </p>

            <div className="space-y-4 px-4">
              <div>
                <label className="text-sm opacity-80">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)] text-sm outline-none focus:border-[var(--text-secondary)] transition"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)] text-sm outline-none focus:border-[var(--text-secondary)] transition"
                />
              </div>
              <div>
                <label className="text-sm opacity-80">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full mt-1 p-2 rounded-md bg-[var(--footer-bg_hover)]/10 border border-[var(--border-color)] text-sm outline-none focus:border-[var(--text-secondary)] transition"
                ></textarea>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "var(--shadow-glow)",
                }}
                transition={{ duration: 0.3 }}
                type="submit"
                // disabled={setLoading}
                className="w-max px-4 py-2 rounded-full bg-[var(--text-secondary)] text-[var(--tooltip-color)] font-semibold hover:bg-transparent hover:text-[var(--text-secondary)] border border-transparent hover:border-[var(--text-secondary)] transition-all duration-500 cursor-pointer"
              >
                <span className=" animate-pulse">Send</span>
              </motion.button>
            </div>
          </motion.form> */}


        </div>
      </motion.div>
    </div>
  );
}

 const formFields = [
    {
      name: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      label: "Your Email",
      type: "email",
      placeholder: "Enter your email",
    },
  ];

// social
const socialIcons = [
  { icon: Facebook, url: "https://www.facebook.com/riteshlama007/" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/ritesh-lama-62887435b" },
  { icon: Instagram, url: "https://www.instagram.com/riteshlama1027" },
  { icon: Github, url: "https://github.com/riteshtamang1027riteshtamang1027" },
];

// Contact inforamtion configuration
const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "ritesh@example.com" },
  { icon: Phone, label: "Phone", value: "+977-9812345678" },
  { icon: MapPin, label: "Location", value: "Kathmandu, Nepal" },
];
