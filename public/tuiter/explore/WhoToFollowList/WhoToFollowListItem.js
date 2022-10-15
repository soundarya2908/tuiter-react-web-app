export default function WhoToFollowListItem(who) {
    return(`
        <div class="row">
            <div class="col-lg-3 align-self-center">
                <div class="wd-images-to-follow">
                    <img src=${who.avatarIcon} class="img-fluid rounded-pill">
                </div>
            </div>
            <div class="col-lg-5">
                <div class="font-weight-bold text-white">
                    ${who.userName}
                </div>
                <span class="text-white">@${who.handle}</span>
            </div>
            <div class="col-4 align-self-center">
                <button type="button" class="btn btn-primary btn-block rounded-pill">Follow</button>
            </div>
        </div>
    `)
}