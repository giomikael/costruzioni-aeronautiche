document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("article h2, article h3").forEach(function (heading) {

        const content = [];
        let element = heading.nextElementSibling;

        while (element) {
            if (
                element.tagName === "H2" ||
                (heading.tagName === "H2" && element.tagName === "H1")
            ) {
                break;
            }

            if (heading.tagName === "H3" && element.tagName === "H2") {
                break;
            }

            content.push(element);
            element = element.nextElementSibling;
        }

        if (content.length === 0) return;

        const wrapper = document.createElement("details");
        const summary = document.createElement("summary");

        summary.innerHTML = heading.innerHTML;
        wrapper.appendChild(summary);

        heading.replaceWith(wrapper);

        content.forEach(function (el) {
            wrapper.appendChild(el);
        });
    });
});
