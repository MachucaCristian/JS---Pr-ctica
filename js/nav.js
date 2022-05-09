
let header = document.getElementById("menuNav");
let navBar = document.createElement("nav");
navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");
navBar.innerHTML = `
<div class="container-fluid">
  <a class="navbar-brand" href="#">Menu </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">INICIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">NOSOTROS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACTO</a>
      </li>
  
    </ul>
  </div>
</div>
`;
header.appendChild(navBar);
