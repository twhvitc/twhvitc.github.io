// Mouse follower
const trailer = document.getElementById("trailer");

    const animateTrailer = (e, interacting) => {
      const x = e.clientX - trailer.offsetWidth + 10;
      const y = e.clientY - trailer.offsetHeight + 10;
      const offSetCorrection = 0;
      const keyframes = {
        transform: `translate(
                  ${interacting ? x + offSetCorrection : x}px, 
                  ${interacting ? y + offSetCorrection : y}px) 
                  scale(${interacting ? 4 : 1})`
      };
      trailer.animate(keyframes, {
        duration: interacting ? 500 : 1000,
        fill: "forwards"
      });
    };
    window.onmousemove = (e) => {
      const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
      animateTrailer(e, interacting);
    };