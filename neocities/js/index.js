const marquees = document.querySelectorAll(".marquee-inner");
const rows = 11;
const text = " Mizuiro.love • I Love Mizuiro • ";

marquees.forEach(container => {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "marquee-row";

    const track = document.createElement("div");
    track.className = "text-track";
    track.textContent = text.repeat(15);

    row.appendChild(track);
    track.style.animationDuration = `${90 + i}s`;
    container.appendChild(row);
  }
});
