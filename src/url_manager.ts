import * as bootstrap from "bootstrap";

console.log("url_manager.ts loaded");

// currently opened info (modal)
let openInfo: HTMLElement | undefined;
// disables updating url parameter on back/forward
let disableUpdateUrlParameter: boolean = false;

export function setupUrlManager(elements: TabHTMLElements): void {
    const url = new URL(window.location.href);
    displayContent();

    // update search parameter depending on opened content
    for (const [tabButton, tabContainer, cards] of elements) {
        tabButton.firstElementChild?.addEventListener("show.bs.tab", () => updateUrlParameter("tab", tabContainer.id));
        for (const card of cards) {
            const modal = card.querySelector<HTMLElement>("div.modal");
            if (modal) {
                modal.addEventListener("show.bs.modal", () => updateUrlParameter("info", modal.id.slice(0, -"_info".length)));
                modal.addEventListener("show.bs.modal", () => openInfo = modal);
                modal.addEventListener("hide.bs.modal", () => updateUrlParameter("info", undefined));
                modal.addEventListener("hide.bs.modal", () => openInfo = undefined);
            }
        }
    }

    // update content on back/forward
    window.addEventListener("popstate", (event) => displayContent());

    function displayContent(): void {
        const parameter = new URL(window.location.href);
        const tab = parameter.searchParams.get("tab") ?? 'episodes';
        const info = parameter.searchParams.get("info");

        disableUpdateUrlParameter = true;

        // close previously opened info
        if (openInfo) {
            bootstrap.Modal.getInstance(openInfo)?.hide();
            openInfo = undefined;
        }

        // show tab
        let tabIndex = Math.max(0, elements.findIndex(([, tabContainer,]) => tabContainer.id == tab));
        const tabButton = elements[tabIndex][0];
        const tabContainer = elements[tabIndex][1];
        bootstrap.Tab.getOrCreateInstance(tabButton.firstElementChild!).show();

        // show info
        if (info) {
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

function updateUrlParameter(name: string, value?: string, pushState: boolean = true): void {
    if (disableUpdateUrlParameter) return;
    const url = new URL(window.location.href);
    if (value) {
        url.searchParams.set(name, value);
        // sort the search parameter
        const tab = url.searchParams.get("tab");
        const info = url.searchParams.get("info");
        Array.from(url.searchParams.keys()).forEach((name) => url.searchParams.delete(name));
        if (tab) url.searchParams.append("tab", tab);
        if (info) url.searchParams.append("info", info);
    }
    else {
        url.searchParams.delete(name);
    }
    const state = { 'tab': url.searchParams.get('tab'), 'info': url.searchParams.get('info') };
    if (pushState) {
        history.pushState(state, "", url.href);
    }
    else {
        history.replaceState(state, "", url.href);
    }
}