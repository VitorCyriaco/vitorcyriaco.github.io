// Fetch the HTML content of the allCategoriesMenu.html file and insert it into the element with ID 'all-categories'
fetch('../components/allCategoriesMenu.html')
.then(res => res.text())
.then(data => {
  document.getElementById('all-categories').insertAdjacentHTML('beforeend', data);
});

// Fetch the HTML content of the departmentsMenu.html file and insert it into the element with ID 'departments-menu'
fetch('../components/departmentsMenu.html')
.then(res => res.text())
.then(data => {
  document.getElementById('departments-menu').insertAdjacentHTML('beforeend', data);
});

// Function to handle the click event on the menu footer items
document.querySelectorAll('[data-toggle]').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-toggle');
    const content = document.querySelector(`.collapsible-content[data-id="${id}"]`);

    if (window.innerWidth < 1024) {

      document.querySelectorAll('.collapsible-content').forEach(el => {
        if (el.getAttribute('data-id') !== id) {
          el.classList.add('hidden');
        }
      });

      content.classList.toggle('hidden');
    }
  });
});