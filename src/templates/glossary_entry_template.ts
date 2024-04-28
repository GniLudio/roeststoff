import { createAccordionItem } from "./accordion_item_template";

export function convertGlossaryEntryToHTML(glossaryEntry: GlossaryEntry): Node {
    return createAccordionItem("glossary", glossaryEntry.id, glossaryEntry.title, glossaryEntry.description);
}