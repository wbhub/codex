import React from "react";
import PricingSection from "components/PricingSection";

function PricingPage(props) {
  return (
    <PricingSection
      bgColor="primary"
      size="medium"
      bgImage="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      bgImageOpacity={0.5}
      title="Everyone Loves a Good Plan"
      subtitle="All paid options include a 14-day free trial."
    />
  );
}

export default PricingPage;
