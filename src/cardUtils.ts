export function createCard(info: CardInfo): HTMLElement {
    const additionalInfoElements = createAdditionalInfo(info.additionalInfo);
    // TODO: lazy loading? loading="lazy"
    const image = info.image ? `<img src="${info.image}" class="card-img-top p-1 rounded-3" alt="Foto ${info.name}">` : "";

    const element = document.createElement('div');
    element.classList.add('col');

    element.innerHTML = `
    <div class="card bg-light border-warning border-3 h-100 overflow-auto">
        ${image}
        <div class="card-body d-flex flex-column">
            <h5 class="card-title m-auto">${info.name}</h5>
            <h6 class="card-subtitle text-muted m-auto py-2">${info.subtitle}</h6>
            ${additionalInfoElements[0]}
        </div>
    </div>
    ${additionalInfoElements[1]}
    `
    return element;
}

export function createAdditionalInfoBlock(header: string, content: string): string {
    return `
        <div class='rounded-5 m-3 p-2 border border-2 border-warning-subtle bg-light'>
            <h5>${header}</h5>
            ${content}
        </div>`
}

export function createAdditionalInfoListBlock(header: string, content: string[]): string {
    if (content.length == 0) content.push("-");
    content = content.map(item => `<li class="list-group-item bg-transparent">${item}</li>`)
    return createAdditionalInfoBlock(header, `<ul class="list-group list-group-flush" style='display:inline-block'>${content.join("")}</ul>`);
}

function createAdditionalInfo(info?: AdditionalCardInfo): [button: string, popup: string] {
    if (!info) return ["", ""];
    info.id = "additional_info_" + info.id.replace(/\W/g, '_');
    const button = `
        <button class="btn btn-outline-warning bg-secondary text-white m-auto" data-bs-toggle="modal" data-bs-target="#${info.id}">
            ${info.buttonName}
        </button>`
    const popup = `
    <div class="modal fade" id="${info.id}" tabindex="-1" aria-labelledby="${info.id}" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="${info.id}">${info.name}</h3>
                    <button type="button" class="btn-close mx-1" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${info.content}
                </div>
            </div>
        </div>
    </div>`
    return [button, popup];
}

function shortenText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;

    const words = text.split(" ");
    let shortText = words.shift()!;
    for (const word of words) {
        if (shortText.length + 1 + word.length > maxLength - 3) {
            break;
        }
        shortText += " " + word;
    }
    return shortText + "...";
}