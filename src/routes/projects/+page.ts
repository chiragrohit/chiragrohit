import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    let projects;

    const response = await fetch("/api/projects");
    if (response.ok) {
        projects = await response.json();
    } else {
        console.error("Failed to fetch projects");
    }

    return {
        projects,
    };
};
