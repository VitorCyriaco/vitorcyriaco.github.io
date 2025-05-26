const inputs = [
    document.getElementById('search-input-mobile'),
    document.getElementById('search-input-desktop')
  ];
  const dropdown = document.getElementById('search-dropdown');
  
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const value = input.value.trim();
      if (value) {
        dropdown.textContent = `Você buscou por: '${value}'`;
        dropdown.style.display = 'block';
        const rect = input.getBoundingClientRect();
        dropdown.style.position = 'absolute';
        dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        dropdown.style.left = `${rect.left + window.scrollX}px`;
        dropdown.style.width = `${rect.width}px`;
      } else {
        dropdown.style.display = 'none';
      }
    });
  
    input.addEventListener('blur', () => {
      setTimeout(() => dropdown.style.display = 'none', 200);
    });
  
    input.addEventListener('focus', () => {
      if (input.value.trim()) {
        dropdown.style.display = 'block';
      }
    });
  });