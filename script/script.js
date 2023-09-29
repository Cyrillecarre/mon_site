
document.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelectorAll('.letter');
  let animationIteration = 0;
  const maxAnimationIterations = 6;

  function applyRandomTransform(letter) {
    const rotate = Math.random() * 720 - 360;
    const scale = 0.5 + Math.random();
    const translateX = Math.random() * 200 - 100;
    const translateY = Math.random() * 200 - 100;
    letter.style.transform = `rotate(${rotate}deg) scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  }

  function animateLetters() {
    letters.forEach((letter, index) => {
      applyRandomTransform(letter);

      const animations = [
        { delay: 0.6, color: 'aqua' },
        { delay: 0.8, color: 'rgb(67, 64, 160)' },
        { delay: 1, color: 'bisque' },
        { delay: 1.3, color: 'blue' },
        { delay: 1.6, color: 'blueviolet' },
        { delay: 1.9, color: 'brown' },
        { delay: 2.2, color: 'blanchedalmond' },
        { delay: 2.5, color: 'rgb(143, 67, 205)' },
        { delay: 2.8, color: 'azure' },
        { delay: 3, color: 'rgb(28, 172, 172)' },
        { delay: 3.2, color: 'rgb(43, 183, 80)' },
        { delay: 3.5, color: 'rgb(218, 142, 42)' },
        { delay: 3.8, color: 'rgb(168, 17, 44)' },
        { delay: 4, color: 'rgb(59, 134, 134)' },
        { delay: 4.2, color: 'rgb(152, 217, 138)' },
        { delay: 4.4, color: 'rgb(210, 118, 226)' },
        { delay: 4.7, color: 'rgb(130, 211, 32)' },
      ];

      const animation = animations[index % animations.length];
      letter.style.animation = `fadeInUp 0.5s ease forwards ${animation.delay}s`;
      letter.style.color = animation.color;
    });

    setTimeout(() => {
      letters.forEach((letter) => {
        letter.style.transform = '';
        letter.style.animation = '';
      });
      animationIteration++;
      if (animationIteration < maxAnimationIterations) {
        animateLetters();
      }
    }, 800);
  }

  animateLetters();
});



// animation des vignettes page accueil //

setTimeout(function () {
  document.querySelector('.vignette1').classList.add('visible');
}, 800);

setTimeout(function () {
  document.querySelector('.vignette2').classList.add('visible');
}, 1200);

setTimeout(function () {
  document.querySelector('.vignette3').classList.add('visible');
}, 1700);

setTimeout(function () {
  document.querySelector('.vignette4').classList.add('visible');
}, 2100)


// logique bouton vignette //

const monProfil = document.getElementById("vignette1");

  monProfil.addEventListener("click", function() {
    window.location.href = "pages/monProfil.html";
  });




