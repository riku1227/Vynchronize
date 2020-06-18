const l10n_ja = [
    ["enqueueButton", `<i class="fas fa-plus"></i> キューに追加する`],
    ["hostlabel", `<i class="fas fa-user"></i> 現在のホスト: Kyle `],
    ["note_host_only_controll_player", `<b>Note: </b>ホストのみがプレイヤーを直接操作し、同期させることができます`],
    ["hostbutton", `<i class="fas fa-users"></i> 自分をホストにする`],
    ["emptyButton", `<i class="fas fa-trash"></i> キューを空にする`],
    ["syncbutton", `<i class="fa fa-sync"></i> 同期する`],
    ["playButton", `<i class="fa fa-play"></i> 再生 / <i class="fa fa-pause"></i> 停止`],
    ["nextButton", `<i class="fas fa-step-forward"></i> 次の動画へ`]
];

function setupL10N() {
    if(navigator.language == "ja") {
        for(let i = 0; i < l10n_ja.length; i++) {
            const langMap = l10n_ja[i];
            const key = langMap[0];
            const value = langMap[1];

            const element = document.getElementById(key);
            if(element !== undefined && element !== null) {
                element.innerHTML = value;
            }
        }
    }
}