// ตรวจสอบและเน้นสีเมนูหน้าปัจจุบันอัตโนมัติเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".site-nav a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        }
    });
});
