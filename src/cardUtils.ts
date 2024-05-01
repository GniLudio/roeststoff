const CARD_MAX_TITLE_LENGTH = 100;
const CARD_MAX_SUBTITLE_LENGTH = 100;

export function createCard(info: CardInfo): HTMLElement {
    info.title = shortenText(info.title, CARD_MAX_TITLE_LENGTH);
    info.subtitle = shortenText(info.subtitle, CARD_MAX_SUBTITLE_LENGTH);
    const additionalInfoElements = createAdditionalInfo(info.additionalInfo);
    const image = info.image ? `<img src="${info.image}" class="card-img-top p-1 rounded-3" alt="Foto ${info.title}">` : "";

    const element = document.createElement('div');
    element.classList.add('col');

    element.innerHTML = `
    <div class="card bg-light border-warning border-3 h-100">
        ${image}
        <div class="card-body d-flex flex-column">
            <h5 class="card-title m-auto pb-3">${info.title}</h5>
            <h6 class="card-subtitle text-muted m-auto pb-3">${info.subtitle}</h6>
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

function createAdditionalInfo(info?: AdditionalCardInfo): [button: string, popup: string] {
    if (!info) return ["", ""];
    const button = `
        <button class="btn btn-outline-warning bg-secondary text-white m-auto" data-bs-toggle="modal" data-bs-target="#${info.id}">
            ${info.buttonName}
        </button>`
    const popup = `
    <div class="modal fade" id="${info.id}" tabindex="-1" aria-labelledby="${info.id}" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="${info.id}">${info.title}</h3>
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
    let shortText = words.shift();
    for (const word of words) {
        if (shortText.length + 1 + word.length > maxLength - 3) {
            break;
        }
        shortText += " " + word;
    }
    return shortText + "...";
}