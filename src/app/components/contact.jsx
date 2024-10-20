"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen py-24 gap-4 relative text-center"
    >
      
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>

      <div className="z-10 max-w-xl">
        <h5 className="text-4xl font-bold text-white my-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-8">
          I am currently exploring new and exciting opportunities to challenge myself and make meaningful contributions. Whether you're interested in discussing a potential project, exploring ways we can collaborate, or simply have a question about my work or experiences, I’d love to hear from you. My inbox is always open, and I value the chance to connect with like-minded individuals, organizations, or anyone eager to share ideas. </p>

         <p className="text-[#ADB7BE] mb-8">If you're looking for someone to join your team, contribute to a project, or offer insights on something you're working on, I would be more than happy to discuss how I can be of help. Additionally, if you simply want to chat, exchange thoughts, or say hello, don’t hesitate to get in touch. I enjoy building new relationships and am always open to meaningful conversations.</p>

         <p className="text-[#ADB7BE] mb-8"> While I do my best to respond promptly, please bear with me if there’s a slight delay. I truly appreciate each message and will ensure I get back to you as soon as possible. Whatever the reason for reaching out, I am excited to hear from you and explore the possibilities!
        </p>

        {/* Social Links */}
        <div className="socials flex flex-row gap-4 justify-center">
          <Link href="https://github.com/Navodi20" aria-label="Github Profile">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/navodi-dhananjana-12084b2a7/" aria-label="LinkedIn Profile">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
          <Link href="mailto:navodidhananjana2002@gmail.com" aria-label="Email Address">
            <Image src={EmailIcon} alt="Email Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
