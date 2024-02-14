export const getThemeMode = (): string | null => {
  return localStorage.getItem("colorMode");
};

export const getBgColor = (): string => {
  const colorMode = getThemeMode();
  if (colorMode === "dark") {
    return "#000";
  } else {
    return "#fff";
  }
};
