import React from "react";
import FaqSection from "components/FaqSection";
import CtaSection3 from "components/CtaSection3";

function FaqPage(props) {
  return (
    <>
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />
      <CtaSection3
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
    </>
  );
}

export default FaqPage;
