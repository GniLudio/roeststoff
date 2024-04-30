console.log("card_template.ts loaded");

const parser = new DOMParser();

export function createCard(info: {content_type: string, img_folder: string, img_alt: string, id: number, card_title: string, card_subtitle: string, title: string, img_format: ImageFormat, additional_info: Record<string, string|string[]>}): Node {
    console.log("Create Card", info.content_type, info.card_title, info.id, info.img_format);

    const element = document.createElement(`div`);
    element.classList.add('col');
    element.innerHTML = `
        <div class="card bg-light border-warning border-3 h-100">
                <img src="images/${info.img_folder}/${info.content_type}_${info.id}.${info.img_format}" 
                    class="card-img-top p-1 rounded-3" alt="${info.img_alt} ${info.id}">
                <div class="card-body d-flex flex-column">
                    <div class="m-auto">
                        <h5 class="card-title">${info.card_title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${info.card_subtitle}</h6>
                    </div>
                    <button class="btn btn-primary m-auto" data-bs-toggle="modal" data-bs-target="#${info.content_type}_${info.id}_modal">Infos</button>
                </div>
            </div>
            <div class="modal fade" id="${info.content_type}_${info.id}_modal" tabindex="-1" aria-labelledby="${info.content_type}_${info.id}_modal" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h2 class="modal-title w-100" id="${info.content_type}_${info.id}_modal">${info.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${createAdditionalInfo(info.additional_info)}
                        </div>
                    </div>
                </div>
        </div>`
    return element;
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
        } 
        else {
            content = list_template.replace('{content}', value.map(item => list_item_template.replace('{content}', item)).join(""));
        }
        additional_info += additional_info_item_template.replace('{title}', title).replace('{content}', content);

    }
    return additional_info;
}

const additional_info_item_template = `<div class='rounded-5 m-3 p-1 border border-2 border-warning-subtle bg-light'><h5>{title}</h5><p>{content}</p></div>`
const list_template: string = `<ul class="list-group list-group-flush" style='display:inline-block'>{content}</ul>`
const list_item_template: string = `<li class="list-group-item bg-transparent">{content}</li>`;