const navbarItems = {
  Home: "/",
  Projects: "/projects",
  Components: "/components",
  About: "/about",
  Test: "/test",
};

export function load({ url }) {
  return {
    url: url.pathname,
    navbarItems: navbarItems,
  };
}
