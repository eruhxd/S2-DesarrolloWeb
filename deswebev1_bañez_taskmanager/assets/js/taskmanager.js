// Función para agregar tarea
function agregarTarea() {
    let input = document.getElementById("nuevaTarea");
    let texto = input.value.trim();

    // Condición: verificar que no esté vacío
    if (texto === "") {
        alert("Por favor escribe una tarea.");
        return;
    }

    // Crear elemento li y añadirlo al DOM
    let li = document.createElement("li");
    li.textContent = texto;

    // Permitir eliminar una tarea al hacer clic
    li.onclick = function() {
        this.remove();
    };

    document.getElementById("lista").appendChild(li);

    // Limpiar el campo
    input.value = "";
}
