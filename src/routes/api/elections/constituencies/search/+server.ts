import { json } from "@sveltejs/kit";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET({ url }: { url: URL }) {
    const nameQuery = url.searchParams.get("name")?.toLowerCase();
    if (!nameQuery) {
        return json([]);
    }

    const result = Object.values(electionResults).filter((constituency: any) =>
        constituency["Constituency Name"].toLowerCase().includes(nameQuery)
    );

    return json(result.map((result: any) => ({
        "Constituency No": result["Constituency No"],
        "Constituency Name": result["Constituency Name"],
    })));
}
