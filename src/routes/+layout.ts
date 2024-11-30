import type { PageLoad } from "./$types";

const navbarItems = {
    Home: "/",
    Projects: "/projects",
    Components: "/components",
    Blog: "/blog",
    About: "/about",
};

export const load: PageLoad = async ({ fetch, url }) => {
    let projects;

    try {
        const response = await fetch("/api/projects");
        if (response.ok) {
            projects = await response.json();
        } else {
            console.error("Failed to fetch projects");
        }
    } catch (err) {
        console.error("Error fetching projects:", err);
    }

    return {
        url: url.pathname,
        navbarItems,
        projects,
    };
};
