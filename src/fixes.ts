console.debug("fixes.ts loaded");

export function applyFixes(allContent: AllContent): void {
    const episode = allContent.episodes.find((episode) => episode.episode == 41 && episode.name == "Ein komplettes Menü erklärt (feat. Max Strohe)") as Episode & { episode: number };
    if (episode) {
        console.debug("Fix", "'Ein komplettes Menü erklärt (feat. Max Strohe)'", `Episode 41 -> 43`,);
        episode.episode = 43;
    }
}