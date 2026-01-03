document.addEventListener("DOMContentLoaded", function() {
    if (typeof mermaid !== "undefined") {
        document.querySelectorAll('div.mermaid').forEach(function(el) {
            mermaid.init(undefined, el);
        });
    }
});
