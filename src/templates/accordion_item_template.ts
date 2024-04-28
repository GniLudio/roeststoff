export function createAccordionItem(accordion_name: string, id: number, title: string, description: string): Node {
    const html_text = accordion_item_template
        .replace(new RegExp('{id}', 'g'), id.toFixed())
        .replace('{title}', title)
        .replace('{description}', description);
    return new DOMParser().parseFromString(html_text, "text/html").body.firstChild;
}

const accordion_item_template = `
    <div class="accordion-item border border-2 border-warning">
        <h2 class="accordion-header" id="glossary_item_{id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#glossary_item_{id}_content" aria-expanded="true" aria-controls="glossary_item_{id}_content">
                <span class="text-center w-100">{title}</span>
            </button>
        </h2>
        <div id="glossary_item_{id}_content" class="accordion-collapse collapse" aria-labelledby="glossary_item_{id}" data-bs-parent="#glossary_content">
            <div class="accordion-body">
                {description}
            </div>
        </div>
    </div>`