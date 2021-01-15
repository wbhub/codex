import React from "react";
import HeroSection from "components/HeroSection";
import TeamBiosSection from "components/TeamBiosSection";
import CtaSection2 from "components/CtaSection2";
import ContactSection from "components/ContactSection";

function AboutPage(props) {
  return (
    <>
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80"
        bgImageOpacity={0.2}
        title="We Build Tools for Product People"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/auth/signup"
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Our Team"
        subtitle=""
      />
      <CtaSection2
        bgColor="primary"
        size="large"
        bgImage="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        bgImageOpacity={0.3}
        title="Ready to Create Awesome PRDs?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/auth/signup"
      />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default AboutPage;
