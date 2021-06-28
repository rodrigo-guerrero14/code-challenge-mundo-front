const regions = [
  {
    id: 1,
    name: "Región de Arica y Parinacota"
  }, 
  {
    name: "Región de Tarapacá", 
    id: 2
  },
  {
    name:"Región de Antofagasta",
    id: 3
  },
  {
    name:"Región de Atacama",
    id: 4
  },
  {
    name:"Región de Coquimbo",
    id: 5
  },
  {
    name:"Región de Valparaíso",
    id: 6
  },
  {
    name:"Región Metropolitana de Santiago",
    id:7
  },
  {
    name: "Región del Libertador General Bernardo O’Higgins",
    id: 8
  },
  {
    name: "Región del Maule", 
    id: 9
  },
  {
    name:"Región del Ñuble",
    id: 10
  },
  {
    name: "Región del Biobío",
    id: 11
  },
  {
    name:"Región de La Araucanía",
    id: 12
  },
  {
    name:"Región de Los Ríos",
    id: 13
  },
  {
    name: "Región de Los Lagos",
    id: 14
  },
  {
    name: "Región de Aysén del General Carlos Ibáñez del Campo",
    id: 15
  },
  {
    name:"Región de Magallanes y la Antártica Chilena",
    id: 16
  }
]
const provinces = [
  {
    name: "Provincia de Arica",
    regionId: 1,
    id: 1
  },
  {
    name: "Provincia de Parinacota",
    regionId: 1,
    id: 2
  },
  {
    name: "Provincia de Iquique",
    regionId: 2,
    id: 3
  },
  {
    name: "Provincia de Tamarugal",
    regionId: 2,
    id: 4
  },
  {
    name: "Provincia de Tocopilla",
    regionId: 3,
    id: 5
  },
  {
    name: "Provincia de El Loa",
    regionId: 3,
    id: 6
  },
  {
    name: "Provincia de Antofagasta",
    regionId: 3,
    id: 7
  },
  {
    name: "Provincia de Chañaral",
    regionId: 4,
    id: 8
  },
  {
    name: "Provincia de Copiapó",
    regionId: 4,
    id: 9
  },
  {
    name: "Provincia de Limarí",
    regionId: 5,
    id: 10
  },
  {
    name: "Provincia de Elqui",
    regionId: 5,
    id: 11
  },
  {
    name: "Provincia de Valparaiso",
    regionId: 6,
    id: 12
  },
  {
    name: "Provincia de San Antonio",
    regionId: 6,
    id: 13
  },
  {
    name: "Provincia de Santiago",
    regionId: 7,
    id:14
  },
  {
    name: "Provincia de Colchagua",
    regionId: 8,
    id: 15
  },
  {
    name: "Provincia de Cauquenes",
    regionId: 9,
    id: 16
  },
  {
    name: "Provincia de Itata",
    regionId: 10,
    id: 17
  },
  {
    name: "Provincia de Concepción",
    regionId: 11,
    id: 18
  },
  {
    name: "Provincia de Cautín",
    regionId: 12,
    id: 19
  },
  {
    name: "Provincia de Valdivia",
    regionId: 13,
    id: 20
  },
  {
    name: "Provincia de Osorno",
    regionId: 14,
    id: 21
  },
  {
    name: "Provincia de Aysén",
    regionId: 15,
    id: 22
  },
  {
    name: "Provincia de Magallanes",
    regionId: 16,
    id: 23
  },
]
const cities = [
  {
    name: "Arica",
    provinceId: 1,
    id: 1
  }, 
  {
    name:"Putre",
    provinceId: 2,
    id: 2
  },
  {
    name: "Iquique",
    provinceId: 3,
    id: 3
  },
  {
    name: "Pozo Almonte",
    provinceId: 4,
    id: 4
  },
  {
    name: "Tocopilla",
    provinceId: 5,
    id: 5
  },
  {
    name: "Calama",
    provinceId: 6,
    id: 6
  },
  {
    name: "Antofagasta",
    provinceId: 7,
    id: 7
  },
  {
    name: "Chañaral",
    provinceId: 8,
    id:8 
  },
  {
    name: "Copiapó",
    provinceId: 9,
    id:9 
  },
  {
    name: "Ovalle",
    provinceId: 10,
    id:10 
  },
  {
    name: "Coquimbo",
    provinceId: 11,
    id:11
  },
  {
    name: "Valparaiso",
    provinceId: 12,
    id:12
  },
  {
    name: "San Antonio",
    provinceId: 13,
    id:13
  },
  {
    name: "Santiago",
    provinceId: 14,
    id: 14
  },
  {
    name: "San Fernando",
    provinceId: 15,
    id: 15
  },
  {
    name: "Cauquenes",
    provinceId: 16,
    id: 16
  },
  {
    name: "Quirihue",
    provinceId: 17,
    id: 17
  },
  {
    name: "Concepción",
    provinceId: 18,
    id: 18
  },
  {
    name: "Temuco",
    provinceId: 19,
    id: 19
  },
  {
    name: "Valdivia",
    provinceId: 20,
    id: 20
  },
  {
    name: "Osorno",
    provinceId: 21,
    id: 21
  },
  {
    name: "Aysén",
    provinceId: 22,
    id: 22
  },
  {
    name: "Punta Arenas",
    provinceId: 23,
    id: 23
  }
]

const streetsByCities = [
  {
    streets: ["El tabo", "El Teniente", "Achao", "Felipe II", "Hamburgo"],
    idCity: 1,
    id: 1
  },
  {
    streets: ["Carrera", "Cruce ruta 11", "Serrano", "Teniente del Campo"],
    idCity: 2, 
    id: 2
  },
  {
    streets: ["Alegria", "Irlanda", "Pasaje Diez", "Lebu"],
    idCity: 3,
    id: 3
  },
  {
    streets: ["Los Tamarugos", "Libertad", "Mapocho", "Marco Castro", "Santa Laura"],
    idCity: 4, 
    id: 4
  },
  {
    streets: ["Chorrillos", "Del Rosario", "Pasaje Ejercito"],
    idCity: 5,
    id: 5
  },
  {
    streets: ["23 de Marzo", "Frutillar", "General Salvo", "Avenida Mina Sur"],
    idCity: 6,
    id: 6
  },
  {
    streets: ["Aconcagua", "Freire", "Garcia Lorca", "Isabel Riquelme", "Puyehue"],
    idCity: 7,
    id: 7
  },
  {
    streets: ["Antuco", "Arenas", "Cerro Moreno", "Los Cóndores", "Los Baños"],
    idCity: 8,
    id: 8
  },
  {
    streets: ["Algarrobo", "Farellones", "Papa Pablo XII", "Grecia", "Atacama"],
    idCity: 9, 
    id: 9
  },
  {
    streets: ["Guerrero", "P. Lorca", "Andrés Bello", "Amanecer", "Benavente"],
    idCity: 10,
    id: 10
  },
  {
    streets: ["Europa", "America", "Guacolda", "Hector Valdivia"],
    idCity: 11,
    id: 11
  },
  {
    streets: ["Galos", "Fresia", "Frontera", "Gloria", "Homero"],
    idCity: 12,
    id: 12
  },
  {
    streets: ["Pasaje 1","Pasaje 2","Pasaje 3", "Pasaje 4", "Pasaje 5"],
    idCity: 13,
    id: 13
  },
  {
    streets: ["General Baquedano", "Juan Vicuña", "Las Amapolas", "Lincoln"],
    idCity: 14,
    id: 14
  },
  {
    streets: ["Pasaje 6","Pasaje 7","Pasaje 8", "Pasaje 9", "Pasaje 10"],
    idCity: 15,
    id: 15
  },
  {
    streets: ["5 de Julio", "21 de Mayo", "Avenida Puerto Natales", "Plaza de las armas"],
    idCity: 16,
    id: 16
  },
  {
    streets: ["Pasaje 11","Pasaje 12","Pasaje 13", "Pasaje 14", "Pasaje 15"],
    idCity: 17,
    id: 17
  },
  {
    streets: ["Avenida Los Carrera", "Freire", "Las Heras", "Avenida Paicavi"],
    idCity: 18,
    id: 18
  },
  {
    streets: ["Avenida 16","Avenida 17","Avenida 18", "Avenida 19", "Avenida 20"],
    idCity: 19,
    id: 19
  },
  {
    streets: ["Avenida 21","Avenida 22","Avenida 23", "Avenida 24", "Avenida 25"],
    idCity: 20,
    id: 20
  },
  {
    streets: ["Avenida 26","Avenida 27","Avenida 28", "Avenida 29", "Avenida 30"],
    idCity: 21,
    id: 21
  },
  {
    streets: ["Avenida 31","Avenida 32","Avenida 33", "Avenida 34", "Avenida 35"],
    idCity: 22,
    id: 22
  },
  {
    streets: ["Avenida 36","Avenida 37","Avenida 38", "Avenida 39", "Avenida 40"],
    idCity: 23,
    id: 23
  }
]

export {regions, provinces, cities, streetsByCities}