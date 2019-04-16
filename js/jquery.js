// smooth scrolling initializaion
(function jqueryIIFE() {
    $("a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            let hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                () => {
                    window.location.hash = hash;
                }
            );
        }
    });
}())