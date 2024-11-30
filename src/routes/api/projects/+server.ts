import { error, json } from "@sveltejs/kit";
import projectsData from "$lib/data/projects.json";

export async function GET({ params }: { params: { category?: string } }) {
    const category = params.category;

    if (category) {
        // Find the category in the projects data
        const categoryData = projectsData.projects.find(
            (proj) => proj.category.toLowerCase() === category.toLowerCase(),
        );

        if (!categoryData) {
            throw error(404, "Category not found");
        }

        return json(categoryData);
    }

    // If no category is provided, return all projects
    return json(projectsData);
}
