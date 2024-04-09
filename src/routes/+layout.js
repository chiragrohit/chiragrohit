const navbarItems = {
  Home: "/",
  Projects: "/projects",
  Components: "/components",
  Blog: "/blog",
  About: "/about",
};

export function load({ url }) {
  return {
    url: url.pathname,
    navbarItems: navbarItems,
  };
}
