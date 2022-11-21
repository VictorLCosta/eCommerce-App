import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
	const breakpoints = {
		isXs: useMediaQuery("(max-width: 480px)"),
		isSm: useMediaQuery("(max-width: 768px)"),
		isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
		isLg: useMediaQuery("(min-width: 1025px)"),
		active: "xs",
	};
	if (breakpoints.isXs) breakpoints.active = "xs";
	if (breakpoints.isSm) breakpoints.active = "sm";
	if (breakpoints.isMd) breakpoints.active = "md";
	if (breakpoints.isLg) breakpoints.active = "lg";
	return breakpoints;
}
