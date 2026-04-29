import React from "react";

const MainContainer = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <section className={`max-w-7xl px-5 mx-auto ${styles || ""}`}>
      {children}
    </section>
  );
};

export default MainContainer;
