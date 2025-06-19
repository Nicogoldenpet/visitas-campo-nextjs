const owners = [
  {
    id: 1,
    name: "Pepito Perez",
    finca: "Propietario de Finca La Esperanza",
    date: "2023-10-01",
    charge: "Se encarga de sus cultivos junto con 4 empleados.",
  },
  {
    id: 2,
    name: "Juanito Alcachofa",
    finca: "Propietario de Finca Santa María",
    date: "2023-10-05",
    charge: "Recolecta insectos para pruebas cientificas.",
  },
  {
    id: 3,
    name: "Susana Horia",
    finca: "Propietario de Finca El Paraíso",
    date: "2023-10-10",
    charge: "Se encarga de fumigar la finca una vez a la semana.",
  },
];

export async function getAllOwners() {
  return owners;
}
