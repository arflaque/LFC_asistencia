// ================================================================
//  LINCOLN FC — DATOS INICIALES
//  Estos datos se usan para sembrar Firestore la primera vez.
//  Se gestionan después desde el Panel Admin.
// ================================================================

const SEED_EQUIPOS = [
  { id: 'u9',    nombre: 'Sub 9' },
  { id: 'u11',   nombre: 'Sub 11' },
  { id: 'u13',   nombre: 'Sub 13' },
  { id: 'u13p',  nombre: 'Sub 13 Proceso' },
  { id: 'u15',   nombre: 'Sub 15' },
  { id: 'u21',   nombre: 'Sub 21' },
];

const SEED_JUGADORES = {
  u9: [
    'Aguilar Esteban', 'Amrhein Patrick', 'Anchia Antonio', 'Apestegui Alejandro',
    'Arata Eduardo', 'Barrantes Julian', 'Castillo Felipe', 'Cordero Jose Mario',
    'De Ford George', 'Echeverria Mateo', 'Escalante Ignacio', 'Federspiel Hubert',
    'Ferris Konrad', 'Lamugue Iker', 'Latorraca Geronimo', 'Lizano Felipe',
    'Madrigal Theo', 'Morales Fernan', 'Morales Sebastian', 'Perez Alejandro',
    'Sevilla Gabriel', 'Solis Antonio', 'Soto Alejandro', 'Valverde Marcelo',
    'Varela Franco', 'Vicenti Nicolas'
  ],
  u11: [
    'Alvarado Saul', 'Araya Javier', 'Barrantes Guillermo', 'Beirute Emiliano',
    'Beirute Stefano', 'Cartin Julin', 'Chavez Gabriel', 'Cordero Andres',
    'Echeverria Saul', 'Garita Luisa', 'Madrigal Thiago', 'Morales Gonzalo',
    'Morales Manrique', 'Prez Francisco', 'Pombo Max', 'Robles Lara',
    'Rodriguez Felipe', 'Uribe Javier', 'Velazquez Alberto', 'Volio Alfredo'
  ],
  u13: [
    'Aguilar Federico', 'Anchia Ignacio', 'Antiezar Ignacio', 'Arredondo Alejandro',
    'Aubert Jean Paul', 'Baudrit Luisana', 'Bissinger Kai', 'Broutin Jean Paul',
    'Cartin Gael', 'Chaves Andres', 'Corrales Tomas', 'Ferris Christopher',
    'Gallegos Tomas', 'Garita Fernando', 'Lacayo Octavio', 'Mena Javier',
    'Mora Alberto', 'Morales Gabriel', 'Oreamuno Gabriel', 'Pacheco Mateo',
    'Saborio Andres', 'Tang Ayden', 'Uribe Mateo', 'Vargas Loaiza Javier',
    'Zuñiga Nicolas'
  ],
  u13p: [
    'Allen Levy', 'Araya Juan Manuel', 'Barrantes Daniel', 'Beirute Massimiliano',
    'Carboni Emiliano', 'Castillo Gabriel', 'Devoto Tomas', 'Gamboa Samuel',
    'Garcia Saul', 'Gutierrez Alejandro', 'Helwig Anthony', 'Herrera Ignacio',
    'Hidalgo Felipe', 'Madrigal Erick', 'Perez Fernando', 'Rojas Julian',
    'Romero Luciano', 'Sanchez Felipe', 'Sarbok David', 'Sauma Antonio',
    'Soto Felipe', 'Truque Tomas', 'Uribe Sebastian', 'Vaquero Luca',
    'Vincenti Lorenzo'
  ],
  u15: [
    'Alfaro Tomas', 'Atienzar Ernesto', 'Barrantes Javier', 'Baudrit Santiago',
    'Bogantes Tomas', 'Bombardelli Felipe', 'Camacho Fabian', 'Casafont Fernan',
    'Chavarria Juan Pablo', 'Contreras Javier', 'Coto Felipe', 'Cuevas Juan Diego',
    'Ferris Patrick', 'Gamboa Constanza', 'Garita Ruben', 'Gutierrez Sebastian',
    'Gutierrez Julian', 'Guzman Antonio', 'Jimenez Teo', 'Peralta Julian',
    'Rivera Ignacio', 'Robles Santiago', 'Rojas Nico', 'Romero Santiago',
    'Seeman Thomas', 'Silva Emiliano', 'Zechinato Gianluca'
  ],
  u21: [
    'Artavia Espinach Emilio', 'Madrigal Brenes Alejandro', 'Gazel Delgado Santiago',
    'Volio Chavarria Felipe', 'Olivo Gallegos Marco', 'Segura Vargas Julian',
    'Sanabria Rodriguez Javier', 'Xirinach Brenes Randy', 'Soto Garcia Luciano',
    'Child Constenla Ignacio', 'Goldberg Martin Ian', 'Zamora Chavarria Roberto',
    'Sauma Prado Sergio', 'Jimenez Antonio', 'Segnini Luciano',
    'Woodbridge Aubert Alan', 'Alvarenga Soler Diego', 'Saborio Mora Oscar',
    'Quirce Tanzi Antonio', 'Atmetlla Barchi Emilio', 'Garro Gonzales Alejandro',
    'Escobar Nieto Javier', 'Vazquez Murillo Alejandro', 'Riggioni Vega Alessio',
    'Peña Villalobos Felipe', 'Fernandez Egloff Antonio', 'Odio Vargas Eduardo',
    'Vanderlaat Gonzalez Patrick', 'Rojo Guardia Andres'
  ],
};

const ESTADOS = [
  { id: 'asiste',      label: 'A', nombre: 'Asiste',      css: 'active-asiste' },
  { id: 'falta',       label: 'F', nombre: 'Falta',       css: 'active-falta' },
  { id: 'permiso',     label: 'P', nombre: 'Permiso',     css: 'active-permiso' },
  { id: 'lesion',      label: 'L', nombre: 'Lesión',      css: 'active-lesion' },
  { id: 'tarde',       label: 'T', nombre: 'Tarde',       css: 'active-tarde' },
  { id: 'suspendido',  label: 'S', nombre: 'Suspendido',  css: 'active-suspendido' },
];

const ESTADOS_PARTIDO = [
  { id: 'asiste',          label: 'A',  nombre: 'Asiste',           css: 'active-asiste' },
  { id: 'no_convocado',    label: 'NC', nombre: 'No Convocado',     css: 'active-nc' },
  { id: 'no_disponible',   label: 'ND', nombre: 'No Disponible TS', css: 'active-nd' },
  { id: 'falta_convocado', label: 'FC', nombre: 'Falta/Convocado',  css: 'active-fc' },
];
