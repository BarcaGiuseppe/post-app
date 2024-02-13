export const utilityGetAuthFromLS = () => {
  const cachedIsAuthValue: string | null = localStorage.getItem("isAuth");
  const parsedIsAuthValue: boolean = !!cachedIsAuthValue ? true : false;
  return parsedIsAuthValue;
};
