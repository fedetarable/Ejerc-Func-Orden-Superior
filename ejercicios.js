// Ejercicio 1

function filtrarPorAlcohol(cervezas, alcohol) {
  const noExcede = cervezas.filter((cerveza) => cerveza.abv <= alcohol);
  const cervezasFiltradas = noExcede.map((cerveza) => {
    return {
      nombre: cerveza.name,
      alcohol: cerveza.abv,
      amargor: cerveza.ibu,
    };
  });
  return cervezasFiltradas;
}

console.log(filtrarPorAlcohol(beers, 5));

// Ejercicio 2

function diezMasAlcoholicas(cervezas) {
  const cervezasOrdenadas = cervezas.sort((a, b) => b.abv - a.abv);
  const diezMasAlcoholicas = cervezasOrdenadas.slice(0, 10);
  return diezMasAlcoholicas;
}

console.log(diezMasAlcoholicas(beers));

// Ejercicio 3

function diezMenosAmargas(cervezas) {
  const cervezasOrdenadas = cervezas.sort((a, b) => a.ibu - b.ibu);
  const diezMenosAmargas = cervezasOrdenadas.slice(0, 10);
  return diezMenosAmargas;
}

console.log(diezMenosAmargas(beers));

// Ejercicio 4

function ordenarCervezas(cervezas, propiedad, ascendente) {
  const cervezasOrdenadas = cervezas.sort((a, b) => {
    if (ascendente) {
      return a[propiedad] - b[propiedad];
    } else {
      return b[propiedad] - a[propiedad];
    }
  });
  const diezCervezas = cervezasOrdenadas.slice(0, 10);
  return diezCervezas;
}

console.log(ordenarCervezas(beers, "abv", false));
console.log(ordenarCervezas(beers, "abv", true));
console.log(ordenarCervezas(beers, "ibu", false));
console.log(ordenarCervezas(beers, "ibu", true));

// Ejercicio 5

function renderizarCervezas(cervezas, id) {
  const tabla = document.getElementById(id);
  const filas = cervezas.map((cerveza) => {
    return `<tr>
        <td>${cerveza.name}</td>
        <td>${cerveza.abv}</td>
        <td>${cerveza.ibu}</td>
        </tr>`;
  });
  tabla.innerHTML = filas.join("");
}

renderizarCervezas(beers, "tabla");
