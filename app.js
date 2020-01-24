const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

  const list = document.querySelector('ul');

  let favorites = 0;
  list.addEventListener('click', (ev) => {
    const target = ev.target;
    if(target.tagName === 'LI' && favorites < 3) {
        /*
        const index = [...list.children].indexOf(target);
        employees[index].favorite = !employees[index].favorite;
        */
        if(target.style.background === "beige") {
            target.style.background = "lightblue";
            favorites--;
        } else {
            target.style.background = "beige";
            favorites++;
        }
    }
    else if(target.tagName === 'LI' && favorites >= 3) {
        if(target.style.background === "beige") {
            target.style.background = "lightblue";
            favorites--;
            return;
        }
        alert("too many favorites");
    }
  });

  const render = () => {
    const html = employees.map(employee => {
        return `<li>${employee.name}</li>`;
    }).join('');
    list.innerHTML = html;
  };
  
  render();