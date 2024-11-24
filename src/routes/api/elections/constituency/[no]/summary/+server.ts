import { error, json } from "@sveltejs/kit";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET({ params }: { params: { no: string } }) {
    const constituencyNo = params.no;
    const constituency = electionResults[constituencyNo];

    if (!constituency) {
        throw error(404, "Constituency not found");
    }

    const totalVotes = constituency.Candidates.reduce(
        (total: number, candidate: any) => total + candidate["Total Votes"],
        0,
    );

    const topCandidate = constituency.Candidates.reduce((
        top: any,
        candidate: any,
    ) => candidate["Percentage of Votes"] > top["Percentage of Votes"]
        ? candidate
        : top
    );

    return json({
        "Constituency No": constituency["Constituency No"],
        "Constituency Name": constituency["Constituency Name"],
        "Total Votes": totalVotes,
        "Top Candidate": {
            Candidate: topCandidate.Candidate,
            Party: topCandidate.Party,
            "Votes": topCandidate["Total Votes"],
            "Percentage of Votes": topCandidate["Percentage of Votes"],
        },
    });
}
