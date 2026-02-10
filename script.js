const copyBtn = document.getElementById("copy-ip");

copyBtn.addEventListener("click", () => {
    const ip = copyBtn.dataset.ip;

    navigator.clipboard.writeText(ip).then(() => {
        const oldText = copyBtn.textContent;
        copyBtn.textContent = "IP kopiert!";
        setTimeout(() => {
            copyBtn.textContent = oldText;
        }, 1500);
    });
});
