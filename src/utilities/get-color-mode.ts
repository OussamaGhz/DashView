export const getThemeMode = () => {
  return localStorage.getItem("colorMode");
};

export const getBgColor = () => {
  const colorMode = getThemeMode();
  if (colorMode === "dark") {
    return "#000";
  } else {
    return "#fff";
  }
};
