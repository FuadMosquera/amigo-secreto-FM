// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

(() => {
  'use strict';

  // --- Estado y referencias DOM ---
  const input = document.getElementById('amigo');
  const lista = document.getElementById('listaAmigos');
  const resultado = document.getElementById('resultado');

  // Persistencia opcional (puedes comentar la línea si no la quieres)
  let amigos = JSON.parse(localStorage.getItem('amigos') || '[]');

  // --- Utilidades ---
  const save = () => localStorage.setItem('amigos', JSON.stringify(amigos));

  const limpiarResultado = () => {
    if (resultado) resultado.innerHTML = '';
  };

  const renderLista = () => {
    if (!lista) return;

    lista.innerHTML = '';
    amigos.forEach((nombre, index) => {
      const li = document.createElement('li');
      li.textContent = nombre;

      // botón eliminar
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = '✕';
      btn.setAttribute('aria-label', `Eliminar ${nombre}`);
      btn.style.marginLeft = '8px';
      btn.onclick = () => eliminarAmigo(index);

      li.appendChild(btn);
      lista.appendChild(li);
    });

    // cada vez que cambia la lista, borra el resultado del sorteo anterior
    limpiarResultado();
  };

  // --- API expuesta a los onclick del HTML ---
  window.agregarAmigo = function agregarAmigo() {
    const nombre = (input?.value || '').trim();

    if (!nombre) {
      alert('Por favor, escribe un nombre válido.');
      return;
    }

    // evita duplicados (insensible a mayúsculas/minúsculas)
    const existe = amigos.some(n => n.toLowerCase() === nombre.toLowerCase());
    if (existe) {
      alert('Ese nombre ya está en la lista.');
      return;
    }

    // límite razonable de longitud
    if (nombre.length > 60) {
      alert('El nombre es demasiado largo (máx. 60 caracteres).');
      return;
    }

    amigos.push(nombre);
    save();
    renderLista();

    if (input) {
      input.value = '';
      input.focus();
    }
  };

  window.eliminarAmigo = function eliminarAmigo(index) {
    amigos.splice(index, 1);
    save();
    renderLista();
  };

  window.sortearAmigo = function sortearAmigo() {
    // Para sortear un amigo secreto al azar desde la lista:
    if (amigos.length < 2) {
      alert('Necesitas al menos 2 participantes para realizar el sorteo.');
      return;
    }

    const idx = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[idx];

    // pinta el resultado
    if (resultado) {
      resultado.innerHTML = '';
      const li = document.createElement('li');
      li.innerHTML = `🎉 El amigo secreto es: <strong>${elegido}</strong>`;
      resultado.appendChild(li);
    }
  };

  // --- Accesibilidad: permitir Enter en el input para agregar ---
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') window.agregarAmigo();
  });

  // --- Init ---
  renderLista();
})();
