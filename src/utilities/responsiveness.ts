export const isMobile = (resolution: number) => {
  return resolution >= 320 && resolution <= 1280;
};

export const isDesktop = (resolution: number) => {
  return resolution > 1280;
};
