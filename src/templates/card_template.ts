console.log("card_template.ts loaded");

export function createCard(info: {content_type: string, img_folder: string, img_alt: string, id: number, card_title: string, card_subtitle: string, title: string, img_format: ImageFormat, additional_info: Record<string, string|string[]>}): HTMLElement {
    let html_text = card_template;

    html_text = html_text.replace(new RegExp('{id}', 'g'), info.id.toFixed())
        .replace(new RegExp('{content_type}', 'g'), info.content_type)
        .replace('{img_folder}', info.img_folder)
        .replace('{content_alt}', info.img_alt)
        .replace('{img_format}', info.img_format)
        .replace('{card_title}', info.card_title)
        .replace('{card_subtitle}', info.card_subtitle)
        .replace('{title}', info.title)
        .replace('{additional_info}', createAdditionalInfo(info.additional_info));
    return new DOMParser().parseFromString(html_text, "text/html").body;
}

function createAdditionalInfo(info: Record<string, string|string[]>): string {
    let additional_info = "";
    for (const [title, value] of Object.entries(info)) {
        let content: string;
        if (value.length == 0) {
            content = "-"
        } 
        else if (typeof(value) == "string") {
            content = value;
        } else {
            content = list_template.replace('{content}', value.map(item => list_item_template.replace('{content}', item)).join(""));
        }
        additional_info += additional_info_item_template.replace('{title}', title).replace('{content}', content);

    }
    return additional_info;
}

const card_template: string = `
    <div class="col h-100">
        <div class="card h-100 bg-light border-warning border-3">
            <img src="images/{img_folder}/{content_type}_{id}.{img_format}" class="card-img-top p-1 rounded-3" alt="{content_alt} {id}">
            <div class="card-body d-flex flex-column">
                <div class="m-auto">
                    <h5 class="card-title">{card_title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{card_subtitle}</h6>
                </div>
                <a href="#" class="btn btn-primary m-auto" data-bs-toggle="modal" data-bs-target="#{content_type}_{id}_modal">Infos</a>
            </div>
        </div>
        <div class="modal fade" id="{content_type}_{id}_modal" tabindex="-1" aria-labelledby="{content_type}_{id}_modal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h2 class="modal-title w-100" id="{content_type}_{id}_modal">{title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {additional_info}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
const additional_info_item_template = `<div class='rounded-5 m-3 p-1 border border-2 border-warning-subtle bg-light'><h5>{title}</h5><p>{content}</p></div>`
const list_template: string = `<ul class="list-group list-group-flush" style='display:inline-block'>{content}</ul>`
const list_item_template: string = `<li class="list-group-item bg-transparent">{content}</li>`;