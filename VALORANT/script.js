document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const shopImage = document.getElementById("shopImage");
    const closeButton = document.querySelector(".close");

    // 画像をクリックするとモーダルを表示
    shopImage.addEventListener("click", function () {
        modal.style.display = "flex";
        modal.style.opacity = "1";
        modalImage.src = this.src; // クリックした画像のsrcを取得
    });

    // 閉じるボタンをクリックするとモーダルを閉じる
    closeButton.addEventListener("click", function () {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });

    // モーダルの背景をクリックしても閉じる
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});
