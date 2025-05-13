document.addEventListener("alpine:init", () => {
  Alpine.data("sidebarData", () => ({
    isExpanded: true,

    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
      localStorage.setItem("sidebarExpanded", this.isExpanded);
    },

    init() {
      // Check for saved state
      const savedState = localStorage.getItem("sidebarExpanded");
      this.isExpanded = savedState === null ? true : savedState === "true";

      // Add hover effect for collapsed sidebar
      const sidebar = document.getElementById("sidebar");

      if (sidebar) {
        sidebar.addEventListener("mouseenter", () => {
          if (!this.isExpanded) {
            sidebar.classList.add("hovered");
            sidebar.style.width = "200px";

            // Show text for links
            const textElements = sidebar.querySelectorAll(
              "a span:not(:first-child)"
            );
            textElements.forEach((el) => {
              el.classList.remove("opacity-0", "hidden");
              el.classList.add("opacity-100", "block");
            });
          }
        });

        sidebar.addEventListener("mouseleave", () => {
          if (!this.isExpanded) {
            sidebar.classList.remove("hovered");
            sidebar.style.width = "5rem";

            // Hide text for links
            const textElements = sidebar.querySelectorAll(
              "a span:not(:first-child)"
            );
            textElements.forEach((el) => {
              el.classList.add("opacity-0", "hidden");
              el.classList.remove("opacity-100", "block");
            });
          }
        });
      }
    },
  }));
});
