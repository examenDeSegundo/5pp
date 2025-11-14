// Respuestas correctas
const respuestasCorrectas = {
  p1: "document.write",
  p2: "prompt",
  p3: "const",
  p4: "array",      // ← ya corregido
  p5: "object",
  p6: "console.log",
  p7: "while",
  p8: "switch",
  p9: "miFuncion()",
  p10: "for",
  p11: "node archivo.js"
};

// Función para calificar y pintar respuestas incorrectas en rojo
function calificar() {
  let score = 0;

  // Limpiar clases previas
  document.querySelectorAll("label").forEach(label => {
    label.classList.remove("incorrecta");
    label.classList.remove("correcta");
  });

  for (let pregunta in respuestasCorrectas) {
    let seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);

    if (seleccion) {
      let label = seleccion.parentElement;

      if (seleccion.value === respuestasCorrectas[pregunta]) {
        score++;
        label.classList.add("correcta");
      } else {
        label.classList.add("incorrecta");
      }
    }
  }

  return score;
}

// BOTÓN: Ver calificación
document.getElementById("btnCalificar").addEventListener("click", function () {
  let score = calificar();

  // Mostrar al alumno su resultado
  document.getElementById("resultado").textContent = `Tu calificación es: ${score} / 11`;

  // Guardar en FormSubmit
  document.getElementById("calificacionFinal").value = `${score} / 11`;

  // Guardar nombre + calificación para el correo
  let nombre = document.querySelector('input[name="nombre"]').value;
  document.getElementById("resumenAlumno").value =
    `Alumno: ${nombre}\nCalificación: ${score} / 11`;

  // BLOQUEAR que vuelvan a contestar
  document.querySelectorAll("input[type='radio'], input[type='text']").forEach(i => i.disabled = true);
  document.getElementById("btnCalificar").disabled = true;
});