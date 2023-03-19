const previewElement = document.getElementById("preview");
const button = document.querySelector("button")

button.addEventListener("click", async () => {
    previewElement.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video: {cursor: "always"},
        audio: false
    });
});
