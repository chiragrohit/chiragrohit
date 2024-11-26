import { json } from "@sveltejs/kit";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET() {
    // Combine all constituency candidates into a single array
    const allCandidates = Object.values(electionResults).flatMap(
        (constituency) => constituency.Candidates,
    );

    // Map-Reduce to calculate total votes and vote share percentage by party
    const totalVotes = allCandidates.reduce(
        (sum, candidate) => sum + candidate["Total Votes"],
        0,
    );

    const partyStats = allCandidates.reduce((acc, candidate) => {
        const party = candidate.Party;
        acc[party] = acc[party] || { totalVotes: 0, voteShare: 0 };
        acc[party].totalVotes += candidate["Total Votes"];
        return acc;
    }, {});

    // Calculate vote share percentage for each party
    Object.keys(partyStats).forEach((party) => {
        partyStats[party].voteShare =
            ((partyStats[party].totalVotes / totalVotes) * 100).toFixed(2);
    });

    // Convert partyStats to a sorted array by totalVotes (descending)
    const sortedPartyStats = Object.entries(partyStats)
        .map(([party, stats]) => ({ party, ...stats }))
        .sort((a, b) => b.totalVotes - a.totalVotes);

    return json({ totalVotes, partyStats: sortedPartyStats });
}
