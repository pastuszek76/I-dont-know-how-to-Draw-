
document.getElementById('imageUpload').addEventListener('change', function (e) {
  const tutorialSteps = document.getElementById('tutorialSteps');
  tutorialSteps.innerHTML = '<p>Analizuję obraz... (demo)</p><p>Krok 1: Zrób kontur</p><p>Krok 2: Dodaj detale</p><p>Krok 3: Cieniuj</p>';
});
