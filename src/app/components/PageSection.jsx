import clsx from "clsx";

const PageSection = ({ id, classes, children }) => {
  return (
    <section id={id} className={clsx("px-8 md:px-24", classes)}>
      {children}
    </section>
  );
};

export default PageSection;
