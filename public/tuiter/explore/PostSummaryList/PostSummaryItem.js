export default function PostSummaryItem(item) {
    return (`
        <div class="row">
            <div class="col">
                <div class="text-muted">
                    ${item.topic}
                </div>
                <div>
                    <span class="font-weight-bold">
                        ${item.userName}
                    </span>
                    <span class="text-muted">
                        - ${item.time}
                    </span>
                </div>
                <div class="h6">
                    ${item.title}
                </div>
            </div>
            <div class="col-2 align-self-center">
                <div class="wd-images-to-follow">
                    <img src=${item.image} class="img-fluid rounded-pill">
                </div>
            </div>
        </div>
    `)
}