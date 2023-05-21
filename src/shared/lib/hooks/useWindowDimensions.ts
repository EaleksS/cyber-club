import React from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [height, setHeight] = React.useState<number>(window.innerHeight);
  const [scroll, setScroll] = React.useState<number>(window.scrollY);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const updateScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("resize", updateWidthAndHeight);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return {
    width,
    height,
    scroll,
  };
};
