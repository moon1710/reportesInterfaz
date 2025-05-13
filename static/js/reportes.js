document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad para mostrar tabla de reporte
  const btnGenerarReporte = document.getElementById("btnGenerarReporte");
  const tablaReporte = document.getElementById("tablaReporte");

  if (btnGenerarReporte && tablaReporte) {
    btnGenerarReporte.addEventListener("click", function (e) {
      e.preventDefault();
      tablaReporte.classList.remove("hidden");
    });
  }

  // Funcionalidad para el modal de artistas
  const btnSeleccionarArtistas = document.getElementById(
    "btnSeleccionarArtistas"
  );
  const btnSeleccionarArtistasPeriodo = document.getElementById(
    "btnSeleccionarArtistasPeriodo"
  );
  const btnSeleccionarArtistasDetallados = document.getElementById(
    "btnSeleccionarArtistasDetallados"
  );
  const btnSeleccionarArtistasDetalladosPeriodo = document.getElementById(
    "btnSeleccionarArtistasDetalladosPeriodo"
  );
  const modalArtistas = document.getElementById("modalArtistas");
  const closeModal = document.getElementById("closeModal");
  const btnOkArtistas = document.getElementById("btnOkArtistas");

  // Función para abrir el modal
  function abrirModal() {
    if (modalArtistas) {
      modalArtistas.classList.remove("hidden");
    }
  }

  // Función para cerrar el modal
  function cerrarModal() {
    if (modalArtistas) {
      modalArtistas.classList.add("hidden");
    }
  }

  // Asignar eventos para abrir el modal
  if (btnSeleccionarArtistas) {
    btnSeleccionarArtistas.addEventListener("click", abrirModal);
  }

  if (btnSeleccionarArtistasPeriodo) {
    btnSeleccionarArtistasPeriodo.addEventListener("click", abrirModal);
  }

  if (btnSeleccionarArtistasDetallados) {
    btnSeleccionarArtistasDetallados.addEventListener("click", abrirModal);
  }

  if (btnSeleccionarArtistasDetalladosPeriodo) {
    btnSeleccionarArtistasDetalladosPeriodo.addEventListener(
      "click",
      abrirModal
    );
  }

  // Asignar eventos para cerrar el modal
  if (closeModal) {
    closeModal.addEventListener("click", cerrarModal);
  }

  if (btnOkArtistas) {
    btnOkArtistas.addEventListener("click", function () {
      // Recoger los artistas seleccionados
      const checkboxes = document.querySelectorAll(
        '#formArtistas input[type="checkbox"]:checked'
      );
      const artistasSeleccionados = Array.from(checkboxes).map(
        (cb) => cb.value
      );

      console.log("Artistas seleccionados:", artistasSeleccionados);

      // Aquí podrías hacer una petición AJAX para filtrar por los artistas seleccionados
      // fetch('/reportes/filtrar-artistas', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ artistas: artistasSeleccionados })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   // Actualizar la UI con los datos filtrados
      // });

      cerrarModal();
    });
  }

  // Funcionalidad para buscar por periodo
  const btnBuscarPeriodo = document.getElementById("btnBuscarPeriodo");
  if (btnBuscarPeriodo) {
    btnBuscarPeriodo.addEventListener("click", function () {
      const fechaInicio = document.getElementById("fechaInicio").value;
      const fechaFin = document.getElementById("fechaFin").value;

      if (fechaInicio && fechaFin) {
        console.log("Buscando reportes entre", fechaInicio, "y", fechaFin);
        // Aquí podrías hacer una petición AJAX o redireccionar
        // window.location.href = `/reportes/resumidos/periodo?inicio=${fechaInicio}&fin=${fechaFin}`;
      } else {
        alert("Por favor seleccione fechas de inicio y fin");
      }
    });
  }

  // Funcionalidad para buscar por mes
  const btnBuscarMes = document.getElementById("btnBuscarMes");
  if (btnBuscarMes) {
    btnBuscarMes.addEventListener("click", function () {
      const selectMes = document.getElementById("selectMes");
      const mesSeleccionado = selectMes.value;

      if (mesSeleccionado) {
        console.log("Buscando reportes para el mes", mesSeleccionado);
        // Aquí podrías hacer una petición AJAX o redireccionar
        // window.location.href = `/reportes/detallados/mensuales?mes=${mesSeleccionado}`;
      } else {
        alert("Por favor seleccione un mes");
      }
    });
  }

  // Funcionalidad para buscar por periodo detallado
  const btnBuscarPeriodoDetallado = document.getElementById(
    "btnBuscarPeriodoDetallado"
  );
  if (btnBuscarPeriodoDetallado) {
    btnBuscarPeriodoDetallado.addEventListener("click", function () {
      const fechaInicio = document.getElementById("fechaInicio").value;
      const fechaFin = document.getElementById("fechaFin").value;

      if (fechaInicio && fechaFin) {
        console.log(
          "Buscando reportes detallados entre",
          fechaInicio,
          "y",
          fechaFin
        );
        // Aquí podrías hacer una petición AJAX o redireccionar
        // window.location.href = `/reportes/detallados/periodo?inicio=${fechaInicio}&fin=${fechaFin}`;
      } else {
        alert("Por favor seleccione fechas de inicio y fin");
      }
    });
  }

  // Funcionalidad para exportar
  const btnExportar = document.getElementById("btnExportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", function () {
      console.log("Exportando reporte...");
      // Aquí podrías hacer una petición AJAX para exportar
      alert("Exportando reporte...");
    });
  }

  const btnExportarPeriodo = document.getElementById("btnExportarPeriodo");
  if (btnExportarPeriodo) {
    btnExportarPeriodo.addEventListener("click", function () {
      console.log("Exportando reporte de periodo...");
      // Aquí podrías hacer una petición AJAX para exportar
      alert("Exportando reporte de periodo...");
    });
  }
});
