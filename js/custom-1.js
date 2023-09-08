window.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.querySelector(".footer .website-info-box");
  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "info-item default");
  tempDiv.innerHTML = "永远相信美好的事情即将发生";
  infoBox.appendChild(tempDiv);
});
