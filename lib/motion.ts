export const ease = { out: [0.16, 1, 0.3, 1], inOut: [0.65, 0, 0.35, 1] } as const;
export const dur  = { micro: 0.18, medium: 0.45, major: 0.8 } as const;
export const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: dur.medium, ease: ease.out } } };
export const lineMask = { hidden: { y: "110%" }, show: (i = 0) => ({ y: "0%", transition: { duration: dur.major, ease: ease.out, delay: 0.25 + i * 0.07 } }) };
export const spring = { type: "spring", stiffness: 300, damping: 30, mass: 0.6 };
