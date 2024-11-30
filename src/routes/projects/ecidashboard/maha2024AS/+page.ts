import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    let totalVotes = 0;
    let partyStats = [];
    let constituencies = [];

    const response = await fetch("/api/elections/party-stats"); // Use event-scoped fetch and absolute path
    if (response.ok) {
        const data = await response.json();
        totalVotes = data.totalVotes;
        partyStats = Object.entries(data.partyStats).map(([party, stats]) => ({
            party,
            ...stats,
        }));
    } else {
        console.error("Failed to fetch party stats");
    }

    const response2 = await fetch("/api/elections/constituencies");
    if (response2.ok) {
        constituencies = await response2.json();
        // Sort constituencies by name
        constituencies.sort((a, b) => {
            const nameA = a["Constituency Name"].toLowerCase();
            const nameB = b["Constituency Name"].toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    } else {
        console.error("Failed to fetch constituencies");
    }

    return {
        partyStats,
        constituencies,
    };
};
