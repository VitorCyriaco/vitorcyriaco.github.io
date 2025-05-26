import menuItems from "./data/menu.js";

const menu = document.getElementById("menu");

menuItems.forEach((dep) => {
  const hasSub = dep.categories.length > 0;

  const li = document.createElement("li");
  li.className = "group/sub";

  const a = document.createElement("a");
  a.className = "flex justify-between items-center px-4 py-2 text-sm hover:text-blue hover:font-bold cursor-pointer";
  a.href = "#";
  a.innerHTML = `
    ${dep.name}
    <img class="h-2 block group-hover/sub:hidden" src="assets/img/arrow-right.png" alt="arrow-right">
    <img class="h-2 hidden group-hover/sub:block" src="assets/img/arrow-right-blue.png" alt="arrow-right-blue">
  `;
  li.appendChild(a);

  if (hasSub) {
    const submenu = document.createElement("div");
    submenu.className = "absolute top-[4.5%] left-[25%] bg-transparent w-[700px] h-[360px] hidden group-hover/sub:flex z-30 px-6 py-4";
    
    const colContainer = document.createElement("div");
    colContainer.className = "flex absolute";

    dep.categories.forEach((column) => {
      const ul = document.createElement("ul");
      ul.className = "w-[150px]";

      ul.innerHTML = `
        <li class="mb-2 text-blue font-bold text-sm">Categoria</li>
        ${column.map(cat => `
          <li>
            <a href="#" class="block py-1 text-sm hover:text-blue">${cat}</a>
          </li>
        `).join("")}
      `;

      colContainer.appendChild(ul);
    });

    submenu.appendChild(colContainer);
    li.appendChild(submenu);
  }

  menu.appendChild(li);
});
