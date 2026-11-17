    var menu = document.querySelector(".menu");
    var nav = document.querySelector("nav");

    if (menu && nav) {

        menu.addEventListener("click", function () {

            nav.classList.toggle("open");

            var isOpen = nav.classList.contains("open");

            menu.setAttribute("aria-expanded", isOpen);

        });

        var links = nav.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menu.setAttribute("aria-expanded", "false");

            });

        });

    }