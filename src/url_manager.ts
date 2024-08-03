export function setupUrlManager(elements: TabHTMLElements): void {
    const url = new URL(window.location.href);
    displayContent({ 'tab': url.searchParams.get('tab'), 'info': url.searchParams.get('info') });

    for (const [tabButton, tabContainer, cards] of elements) {
        tabButton.firstElementChild?.addEventListener("show.bs.tab", () => updateUrlParameter("tab", tabContainer.id));
        for (const card of cards) {
            const modal = card.querySelector("div.modal");
            if (modal) {
                modal.addEventListener("show.bs.modal", () => updateUrlParameter("info", modal.id));
                modal.addEventListener("hide.bs.modal", () => updateUrlParameter("info", undefined));
            }
        }
    }

    window.addEventListener("popstate", (event) => displayContent(event.state));

    function displayContent(state: { tab: string | undefined | null, info: string | undefined | null }): void {
        let tabIndex = elements.findIndex(([tabButton, tabContainer, cards]) => tabContainer.id == state.tab);
        if (tabIndex < 0) {
            updateUrlParameter("tab", undefined, false);
            tabIndex = 0;
        }
        elements.forEach(([tabButton, tabContainer, cards]) => {
            tabButton.firstElementChild?.classList.remove("active");
            tabContainer.classList.remove("show", "active");
        });
        const tabButton = elements[tabIndex][0];
        const tabContainer = elements[tabIndex][1];
        tabButton.firstElementChild?.classList.add("active");
        tabContainer.classList.add("show", "active");


        if (state.info) {
            const infoModal = tabContainer.querySelector<HTMLElement>(`#${state.info}`);
            if (infoModal) {
                // FIXME: Open info modal
            }
        }
    }
}

function updateUrlParameter(name: string, value?: string, pushState: boolean = true): void {
    const url = new URL(window.location.href);
    if (value) {
        url.searchParams.set(name, value);

        // sort the search parameter
        const tab = url.searchParams.get("tab");
        const info = url.searchParams.get("info");
        // clear parameter
        Array.from(url.searchParams.keys()).forEach((name) => url.searchParams.delete(name));
        // add in order
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

interface RSState {
    tab?: string,
    info?: string,
}