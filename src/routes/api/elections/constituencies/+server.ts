import { json } from "@sveltejs/kit";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET() {
    const constituencies = Object.values(electionResults).map((
        result: any,
    ) => ({
        "Constituency No": result["Constituency No"],
        "Constituency Name": result["Constituency Name"],
    }));

    return json(constituencies);
}
