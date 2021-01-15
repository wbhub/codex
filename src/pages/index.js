import React from "react";
import HeroSection2 from "components/HeroSection2";
import FeaturesSection from "components/FeaturesSection";
import ClientsSection from "components/ClientsSection";
import CtaSection from "components/CtaSection";
import TestimonialsSection from "components/TestimonialsSection";
import NewsletterSection from "components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"
        bgImageOpacity={0.2}
        title="Create Awesome Product Requirement Docs"
        subtitle="Codex is a simple tool that lets you create beautiful, best-in-class PRDs. It's  free to use and exports straight to Google Docs."
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/auth/signup"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="A Few Reasons to Love Codex"
        subtitle="All the features you need to ship better product, faster."
      />
      <ClientsSection
        bgColor="light"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <CtaSection
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
      <TestimonialsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="People Love Using Codex"
        subtitle=""
      />
      <NewsletterSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Sign Up for Our Newsletter"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
