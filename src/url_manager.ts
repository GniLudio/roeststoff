import * as bootstrap from "bootstrap";

console.debug("url_manager.ts loaded");

// currently opened info (modal)
let openInfo: HTMLElement | undefined;
// disables updating url parameter on back/forward
let disableUpdateUrlParameter: boolean = false;

export function setupUrlManager(elements: TabHTMLElements): void {
    const url = new URL(window.location.href);
    displayContent();

    // update search parameter depending on opened content
    for (const [tabButton, tabContainer, cards] of elements) {
        tabButton.firstElementChild?.addEventListener("show.bs.tab", () => updateUrlParameter(0, tabContainer.id));
        for (const card of cards) {
            const modal = card.querySelector<HTMLElement>("div.modal");
            if (modal) {
                modal.addEventListener("show.bs.modal", () => updateUrlParameter(1, modal.id.slice(0, -"_info".length)));
                modal.addEventListener("show.bs.modal", () => openInfo = modal);
                modal.addEventListener("hide.bs.modal", () => updateUrlParameter(1, undefined));
                modal.addEventListener("hide.bs.modal", () => openInfo = undefined);
            }
        }
    }

    // update content on back/forward
    window.addEventListener("popstate", (event) => displayContent());

    function displayContent(): void {
        const parameter = new URL(window.location.href);
        const tab = parameter.searchParams.keys().toArray()[0];
        const info = parameter.searchParams.keys().toArray()[1];

        disableUpdateUrlParameter = true;

        // close previously opened info
        if (openInfo) {
            bootstrap.Modal.getInstance(openInfo)?.hide();
            openInfo = undefined;
        }

        // show tab
        const tabIndex = Math.max(0, elements.findIndex(([, tabContainer,]) => tabContainer.id == tab));
        const tabButton = elements[tabIndex][0];
        const tabContainer = elements[tabIndex][1];
        bootstrap.Tab.getOrCreateInstance(tabButton.firstElementChild!).show();

        // show info
        if (info !== undefined && info !== "") {
            // note: info must be inside current tab
            const infoModal = tabContainer.querySelector<HTMLElement>(`#${info}_info`);
            if (infoModal) {
                bootstrap.Modal.getOrCreateInstance(infoModal).show(infoModal);
                openInfo = infoModal;
            }
        }
        disableUpdateUrlParameter = false;
    }
}

function updateUrlParameter(index: number, value?: string, pushState: boolean = true): void {
    if (disableUpdateUrlParameter) return;
    const url = new URL(window.location.href);
    const parameter: (string | undefined)[] = url.searchParams.keys().toArray();
    if (value) {
        parameter[index] = value;
    } else {
        parameter.splice(index);
    }

    url.searchParams.forEach((value, key) => url.searchParams.delete(key, value));

    const href = `${url.origin}?${parameter.join("&")}`
    if (pushState) {
        history.pushState(undefined, "", href);
    }
    else {
        history.replaceState(undefined, "", href);
    }
}