console.log('OK');

const splat = document.querySelector("#splat2");

        splat.addEventListener("mouseenter", () => {
            gsap.to("#splat2", {
                // scale: 1.3,
                rotation: 360,
                duration: 0.8,
                transformOrigin: "center center",
                ease: "elastic.out(1, 0.5)"
            });
        });

        splat.addEventListener("mouseleave", () => {
            gsap.to("#splat2", {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                transformOrigin: "center center",
                ease: "elastic.out(1, 0.5)"
            });
        });

const splat1 = document.querySelector("#splat1");

        splat1.addEventListener("mouseenter", () => {
            gsap.to("#splat1", {
                // scale: 1.3,
                rotation: 360,
                duration: 0.8,
                transformOrigin: "center center",
                ease: "elastic.out(1, 0.5)"
            });
        });

        splat1.addEventListener("mouseleave", () => {
            gsap.to("#splat1", {
                scale: 1,
                rotation: 0.8,
                duration: 0.6,
                transformOrigin: "center center",
                ease: "elastic.out(1, 0.5)"
            });
        });

