import { json } from "@sveltejs/kit";
import Fuse from "fuse.js";
import electionResults from "$lib/data/maha_2024_results.json";

export async function GET({ url }: { url: URL }) {
    const nameQuery = url.searchParams.get("name")?.toLowerCase();
    if (!nameQuery) {
        return json([]);
    }

    // Fuse.js configuration for fuzzy searching the candidates' names
    const fuseOptions = {
        keys: ["Candidate"], // Search within the "Candidate" field
        threshold: 0.3, // Adjust the threshold for fuzziness (lower is more precise)
    };

    // Flatten the election results to have a list of candidates with their constituency information
    const allCandidates = Object.values(electionResults).flatMap((
        constituency: any,
    ) => constituency.Candidates.map((candidate: any) => ({
        ...candidate,
        "Constituency No": constituency["Constituency No"],
        "Constituency Name": constituency["Constituency Name"],
        "Total Votes": candidate["EVM Votes"] + candidate["Postal Votes"], // Calculate total votes
    })));

    // Initialize Fuse.js with the list of candidates
    const fuse = new Fuse(allCandidates, fuseOptions);

    // Perform the search
    const results = fuse.search(nameQuery);

    // Sort the results by total votes in descending order
    const sortedResults = results
        .map((result) => result.item)
        .sort((a, b) => b["Total Votes"] - a["Total Votes"]);

    // Return only the required fields: candidate name, party, constituency name, constituency number, and total votes
    return json(sortedResults.map((result) => ({
        "Candidate": result.Candidate,
        "Party": result.Party,
        "Constituency Name": result["Constituency Name"],
        "Constituency No": result["Constituency No"],
        "Total Votes": result["Total Votes"],
    })));
}
