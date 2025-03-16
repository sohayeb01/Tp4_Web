const toggleSwitch = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
      toggleSwitch.checked = true;
    }
  }
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  toggleSwitch.addEventListener('change', switchTheme, false);

  const viewAllButton = document.getElementById('toggle-skills');
  const skillCards = document.querySelectorAll('.skill-card');
  const toggleSkillsText = document.getElementById('toggle-skills-text');
  let showingAll = false;
  viewAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    showingAll = !showingAll;
    if (showingAll) {
      skillCards.forEach(card => card.style.display = 'block');
      toggleSkillsText.textContent = 'Less';
    } else {
      skillCards.forEach((card, index) => {
        card.style.display = index < 8 ? 'block' : 'none';
      });
      toggleSkillsText.textContent = 'View All Skills';
    }
  });

  skillCards.forEach((card, index) => {
    if (index >= 8) {
      card.style.display = 'none';
    }
  });