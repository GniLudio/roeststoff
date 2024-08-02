import * as bootstrap from "bootstrap";

export function setupUrlManager(): void {
    const tabButtons: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('li.nav-item > button.nav-link'));
    const infoModals: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('div.modal'));

    // open initial tab
    let initialTab = new URL(window.location.href).searchParams.get("tab") ?? "episodes";
    const initialTabButton = tabButtons.find((button) => button.getAttribute("data-bs-target")?.slice(1) == initialTab);
    if (initialTabButton) {
        initialTabButton.click();
    } else {
        console.log("Couldn't open tab: ", initialTab);
        updateSearchParameter("tab", null);
        tabButtons[0].click();
        initialTab = tabButtons[0].getAttribute("data-bs-target")!.slice(1);
    }

    // open initial info
    const initialInfo = new URL(window.location.href).searchParams.get("info");
    if (initialInfo && initialInfo.startsWith(initialTab)) {
        console.log("Open Modal: ", initialInfo);
        const initialInfoModal = infoModals.find((modal) => modal.id.slice(0, -5) == initialInfo);
        if (initialInfoModal) {
            const modal = new bootstrap.Modal(initialInfoModal).show();
        }
    }

    // update url when changing tab
    for (const button of tabButtons) {
        button.addEventListener('show.bs.tab', function (event) {
            updateSearchParameter("tab", button.getAttribute('data-bs-target')!.slice(1));
        });
        button.addEventListener('hide.bs.tab', function (event) {
            updateSearchParameter("tab", null);
            updateSearchParameter("info", null);
        });
    }

    // update url when changing info
    for (const modal of infoModals) {
        modal.addEventListener("show.bs.modal", function (event) {
            updateSearchParameter("info", modal.id.slice(0, -5));
        })
        modal.addEventListener("hide.bs.modal", () => {
            updateSearchParameter("info", null);
        });
    };
}

function updateSearchParameter(name: string, value: string | null): void {
    const url = new URL(window.location.href);
    if (value) {
        url.searchParams.set(name, value);
    } else {
        url.searchParams.delete(name);
    }

    // sort the search parameter
    const tab = url.searchParams.get("tab");
    const info = url.searchParams.get("info");
    for (const name of Array.from(url.searchParams.keys())) {
        url.searchParams.delete(name);
    }

    if (tab) url.searchParams.append("tab", tab);
    if (info) url.searchParams.append("info", info);

    history.pushState({}, "", url.href);
}

