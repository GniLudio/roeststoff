import { assert, secondsToTime } from "./utils";

export function parseXML<T>(rawXML: string, rootPath: string[], entryName: string, parser: (element: Element) => T): T[] {
    // parse xml document
    const xmlDocument: XMLDocument = new DOMParser().parseFromString(rawXML, "text/xml");
    // get root element
    let root: Element | null = xmlDocument.querySelector(`${rootPath[0]}`);
    for (let i = 1; (i < rootPath.length) && (root != null); i++) {
        root = root.querySelector(`:scope ${rootPath[i]}`);
    }
    if (root == null) {
        throw new Error(`Couldn't find root: ${rootPath.join(', ')} (${entryName})`);
    }
    return Array.from(root.querySelectorAll(`:scope ${entryName}`)).map(parser);
}

// ---------- CONTENT TYPES ----------

export function parseEpisode(element: Element): Episode {
    // FIXME: Use full tag names (with 'prefix:...')
    return {
        episodeType: parseMandatory(parseEpisodeType, element, 'episodeType'),
        episode: parseMandatory(parseNumber, element, 'episode'),
        name: parseMandatory(parseString, element, 'title'),
        subtitle: parseMandatory(parseString, element, 'subtitle'),
        description: parseMandatory(parseString, element, 'encoded'),
        pubDate: parseMandatory(parseDate, element, 'pubDate'),
        duration: secondsToTime(parseMandatory(parseNumber, element, 'duration')),
        enclosure: parseMandatory(parseEpisodeEnclosure, element, 'enclosure'),
    }
}

export function parsePerson(element: Element): Person {
    return {
        name: parseMandatory(parseString, element, 'name'),
        image: parseMandatory(parseString, element, 'image'),
        description: parseOptional(parseString, element, 'description'),
        isHost: parseOptional(parseBoolean, element, 'isHost'),
        hateQuestion: parseOptional(parseTextWithTimestamp, element, 'hateQuestion'),
        appearances: parseMandatoryArray(parseTimestamp, element, 'appearances', 'appearance'),
        characteristics: parseMandatoryArray(parseTextWithTimestamp, element, 'characteristics', 'characteristic'),
    };
}

export function parseDrink(element: Element): Drink {
    return {
        name: parseMandatory(parseString, element, 'name'),
        image: parseMandatory(parseString, element, 'image'),
        description: parseOptional(parseString, element, 'description'),
        appearances: parseMandatoryArray(parseTimestamp, element, 'appearances', 'appearance'),
    };
}

export function parseBoestOf(element: Element): BoestOf {
    return {
        ...parseTimestamp(element),
        name: parseMandatory(parseString, element, 'name'),
        peter: parseMandatoryArray(parseString, element, 'peter', 'rank'),
        ilona: parseMandatoryArray(parseString, element, 'ilona', 'rank'),
    }
}

export function parseRestaurant(element: Element): Restaurant {
    return {
        name: parseMandatory(parseString, element, 'name'),
        description: parseOptional(parseString, element, 'description'),
        image: parseMandatory(parseString, element, 'image'),
        team: parseOptionalArray(parseString, element, 'team', 'member'),
        appearances: parseMandatoryArray(parseTimestamp, element, 'appearances', 'appearance'),
        characteristics: parseOptionalArray(parseTextWithTimestamp, element, 'characteristics', 'characteristic'),
    };
}

export function parseGlossaryEntry(element: Element): GlossaryEntry {
    return {
        ...parseTimestamp(element),
        name: parseMandatory(parseString, element, 'name'),
        description: parseMandatory(parseString, element, 'description'),
    };
}

export function parseMiscEntry(element: Element): MiscEntry {
    return {
        ...parseTimestamp(element),
        name: parseMandatory(parseString, element, 'name'),
        description: parseMandatory(parseString, element, 'description'),
        image: parseOptional(parseString, element, 'image')
    };
}

// ---------- NESTED & CONTENT TYPES ----------

export function parseTextWithTimestamp(element: Element): TextWithTimestamp {
    return {
        ...parseTimestamp(element),
        description: parseMandatory(parseString, element, 'description'),
    };
}

// ---------- NESTED TYPES ----------

function parseTimestamp(element: Element): Timestamp {
    return {
        ...parseEpisodeID(element),
        episodeTime: parseMandatory(parseTime, element, 'episodeTime'),
    };
}

function parseTime(element: Element): Time {
    const text = parseString(element).split(":");
    return {
        hours: parseInt(text[text.length-3]) || 0,
        minutes: parseInt(text[text.length-2]) || 0,
        seconds: parseInt(text[text.length-1]) || 0,
    };
}

function parseEpisodeID(element: Element): EpisodeID {
    return {
        episodeType: parseOptional(parseEpisodeType, element, 'episodeType') ?? 'full',
        episode: parseMandatory(parseNumber, element, 'episode'),
    };
}

function parseEpisodeEnclosure(element: Element): EpisodeEnclosure {
    return {
        type: assert(element.getAttribute('type'), `Couldn't find attribute: type`),
        url: assert(element.getAttribute('url'), `Couldn't find attribute: url`),
    };
}

function parseEpisodeType(element: Element): EpisodeType {
    switch (element.textContent) {
        case "full":
        case "trailer":
        case "bonus":
            return element.textContent;
        default:
            return "full";
    };
}

function parseDate(element: Element): Date {
    return new Date(parseString(element));
}

// ----------PRIMITIVES----------
function parseNumber(element: Element): number {
    return parseInt(parseString(element)) || 0;
}

function parseString(element: Element): string {
    return element?.textContent ?? "";
}

function parseBoolean(element: Element): boolean {
    return element.textContent == "true";
}

// ----------HELPER----------
function parseMandatoryArray<T>(parser: (entry: Element) => T, element: Element, name: string, entryName: string): T[] {
    return assert(parseOptionalArray(parser, element, name, entryName), `Couldn't find array: ${name}`);
}

function parseOptionalArray<T>(parser: (entry: Element) => T, element: Element, name: string, entryName: string): T[] | undefined {
    const parent = element.querySelector(`:scope ${name}`);
    return parent ? Array.from(parent.querySelectorAll(`:scope ${entryName}`)).map(parser) : undefined;
}

function parseMandatory<T>(parser: (e: Element) => T, element: Element, name: string): T {
    return assert(parseOptional(parser, element, name), `Couldn't find field: ${name}`);
}


function parseOptional<T>(parser: (e: Element) => T, parent: Element, name: string): T | undefined {
    const element = parent.querySelector(`:scope ${name}`);
    return element ? parser(element) : undefined;
}