/*
File to define animation variants

*/

export const fadeInVariant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInRight  = {
  hidden: {opacity: 0, x: 250},
  visible: {opacity: 1, x: 0}
}

export const indicatorVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export const textVariant = {
  hidden: {
    x: "calc(100vw - 50%)",
  },
  visible: {
    x: 0,
  },
};
