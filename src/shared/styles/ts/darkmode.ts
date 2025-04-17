export const toggleDarkMode = () => {
  const classList = document.documentElement.classList;
  if (classList.contains("dark")) {
    classList.remove("dark");
  } else {
    classList.add("dark");
  }
};
