function abrirModal() {
    document.getElementById("modalContacto").style.display = "block";
  }
  
  function cerrarModal() {
    document.getElementById("modalContacto").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("modalContacto");
    if (event.target == modal) {
      cerrarModal();
    }
  };
  