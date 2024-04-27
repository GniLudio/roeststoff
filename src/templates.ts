export const episode_template: string = `
    <div class="col">
        <div class="card h-100 border-warning border-3">
            <img src="images/episodes/episode_{id}.jpg" class="card-img-top p-1 rounded-3" alt="Folge {id}">
            <div class="card-body">
                <h5 class="card-title">{card_title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{card_subtitle}</h6>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#episode_{id}_modal">Infos</a>
            </div>
        </div>
        <div class="modal fade" id="episode_{id}_modal" tabindex="-1" aria-labelledby="episode_{id}_modal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h2 class="modal-title w-100" id="episode_{id}_modal">{title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3>Gäste</h5>
                        <p>{guests}</p>
                        <h3>Böst-Of</h5>
                        <p>{boest_of}</p>
                        <h3>Sponsoren</h5>
                        <p>{sponsors}</p>
                        <h3>Datum</h5>
                        <p>{date}</p>
                        <h3>Beschreibung</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
