import { error, json } from "@sveltejs/kit";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET({ params }: { params: { no: string } }) {
    const constituencyNo = params.no;
    const constituency = electionResults[constituencyNo];

    if (!constituency) {
        throw error(404, "Constituency not found");
    }

    // Sort the candidates in descending order of Total Votes
    constituency.Candidates.sort((a, b) => b["Total Votes"] - a["Total Votes"]);

    return json(constituency);
}
