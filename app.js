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
  list.addEventListener('click', (ev) => {
    const target = ev.target;
    if(target.tagName === 'LI') {
        target.style.background = "beige";
    }
  });

  const render = () => {
    const html = employees.map(employee => {
        return `<li>${employee.name}</li>`;
    }).join('');
    list.innerHTML = html;
  };
  
  render();