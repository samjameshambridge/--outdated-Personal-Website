<<<<<<< HEAD
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
=======
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
>>>>>>> 4e72687ef71d61d5eb637dd819d9359750db03d6
}())