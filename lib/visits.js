const visits = [
  {
    id: 1,
    name: "Finca La Esperanza",
    date: "2023-10-01",
    description: "Visita para inspección de cultivos",
  },
  {
    id: 2,
    name: "Finca El Paraíso",
    date: "2023-10-05",
    description: "Visita para recolección de muestras",
  },
  {
    id: 3,
    name: "Finca Santa María",
    date: "2023-10-10",
    description: "Visita para evaluación de plagas",
  },
];

export async function getAllVisits() {
  return visits;
}
