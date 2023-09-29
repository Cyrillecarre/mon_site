
// animation du titre //
document.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelectorAll('.letter');
  let animationIteration = 0;
  const maxAnimationIterations = 6; // Définissez le nombre d'itérations souhaité

  function applyRandomTransform(letter) {
    const rotate = Math.random() * 720 - 360;
    const scale = 0.5 + Math.random();
    const translateX = Math.random() * 200 - 100;
    const translateY = Math.random() * 100 - 100;
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


//animation des paragraphes au chargement //

document.addEventListener('DOMContentLoaded', () => {
    const cv1 = document.querySelector('.cv1');
    const cv2 = document.querySelector('.cv2');

    if(cv1 && cv2) {
    
    cv1.classList.add('visible');
    cv2.classList.add('visible');
  
    setTimeout(function() {
      document.querySelector('.cv1').classList.add('visible');
    }, 1500);
  
    setTimeout(function() {
      document.querySelector('.cv2').classList.add('visible');
    }, 2100);
    }
  });

// animation des paragraphes au survol //

  const cvh2 = document.querySelector('.cvh2');
  const cvh1 = document.querySelector('.cvh1');
  const cvh3 = document.querySelector('.custom-div-CV');

  cvh2.addEventListener('mouseenter', () => {
    cvh1.style.transform = 'scale(0.8)';
    cvh2.style.transform = 'scale(1.2)';
    cvh2.style.padding = '20px';
    cvh2.style.transition = 'transform 0.3s ease, padding-bottom 0.3s ease';
  });
  
  cvh2.addEventListener('mouseleave', () => {
    cvh1.style.transform = 'initial';
    cvh2.style.transform = 'initial';
    cvh2.style.padding = 'initial';
  });
  
  cvh1.addEventListener('mouseenter', () => {
    cvh2.style.transform = 'scale(0.8)';
    cvh1.style.transform = 'scale(1.2)';
    cvh1.style.transition = 'transform 0.3s ease';
  });

  cvh1.addEventListener('mouseleave', () => {
    cvh2.style.transform = 'initial';
    cvh1.style.transform = 'initial';
  });

  cvh3.addEventListener('mouseenter', () => {
    cvh3.style.transform = 'scale(1.5)';
    cvh3.style.margin = '30px';
    cvh2.style.transform = 'scale(0.8)';
    cvh1.style.transform = 'scale(0.8)';
  });

  cvh3.addEventListener('mouseleave', () => {
    cvh2.style.transform = 'initial';
    cvh3.style.transform = 'initial';
    cvh1.style.transform = 'initial';
    cvh3.style.margin = 'initial';
  });


  // bouton retour accueil //

  const boutonAccueil = document.getElementById("accueilBtn");
  boutonAccueil.addEventListener("click", function() {
    window.location.href = "../index.html";
  });