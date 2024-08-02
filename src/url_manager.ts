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
        updateSearchParameter("tab", null);
        tabButtons[0].click();
        initialTab = tabButtons[0].getAttribute("data-bs-target")!.slice(1);
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

    // open initial info
    const initialInfo = new URL(window.location.href).searchParams.get("info");
    const initialInfoModal = initialInfo && infoModals.find((modal) => modal.id.slice(0, -5) == initialInfo);
    if (initialInfoModal && document.getElementById(initialTab)?.contains(initialInfoModal)) {
        new bootstrap.Modal(initialInfoModal).show();
    }
    else {
        updateSearchParameter("info", null);
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

