"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.95] : [1.03, 1];
  };

  // Subtle 3D tilt transformation that stays centered without sliding under top navbar
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div
      className="min-h-[46rem] md:min-h-[56rem] pt-24 sm:pt-32 pb-16 md:pb-24 flex items-center justify-center relative p-4 md:p-10 select-none"
      ref={containerRef}
    >
      <div
        className="w-full relative flex flex-col items-center justify-center"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-6 sm:mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-4xl mx-auto w-full aspect-auto sm:aspect-[4/3] min-h-[460px] sm:min-h-0 max-h-none sm:max-h-[580px] border-2 sm:border-4 border-[#d8d8d3] p-2 sm:p-4 md:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col justify-between"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#fafafa] border border-[#e8e8e5] p-4 sm:p-10 md:p-12 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};
