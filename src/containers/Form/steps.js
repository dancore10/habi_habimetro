export const stepsJson = [
  {
    path: "user-information",
    step: 1,
    lit_step: "one",
    name: "",
    description: "Nombre completo",
    fields: [
      {
        label: "Nombre completo",
        class: "fullName",
        type: "text",
        required: true,
      },
    ],
  },
  {
    path: "user-contact",
    step: 2,
    lit_step: "two",
    name: "",
    description: "Correo electrónico",
    fields: [
      {
        label: "Correo",
        class: "email",
        type: "email",
        required: true,
      },
    ],
  },
  {
    path: "address-apto",
    step: 3,
    lit_step: "three",
    name: "",
    description: "Dirección del apartamento",
    fields: [
      {
        label: "Dirección",
        class: "address",
        type: "text",
        required: true,
      },
    ],
  },
  {
    path: "floor-apto",
    step: 4,
    lit_step: "four",
    name: "",
    description: "Piso del apartamento",
    fields: [
      {
        label: "Piso",
        class: "floor",
        type: "number",
        min: 1,
        max: 50,
        required: true,
      },
    ],
  },
  {
    path: "common-zones",
    step: 5,
    lit_step: "five",
    name: "",
    description: "¿El apartamento cuenta con las siguientes zonas?",
    fields: [
      {
        label: "Zona BBQ",
        class: "checkbox",
        type: "checkbox",
        required: false,
      },
      {
        label: "Salon comunal",
        class: "checkbox",
        type: "checkbox",
        required: false,
      },
      {
        label: "Parque de juegos",
        class: "checkbox",
        type: "checkbox",
        required: false,
      },
    ],
  },
  {
    path: "parking-zone",
    step: 6,
    lit_step: "six",
    name: "",
    description: "¿Cuenta mi apartamento con parqueadero?",
    fields: [
      {
        label: "Parqueadero",
        class: "selector",
        type: "select",
        required: true,
        options: [
          {
            name: "si",
            value: "si",
          },
          {
            name: "no",
            value: "no",
          },
        ],
      },
      {
        label: "Es techado?",
        class: "checkbox",
        type: "checkbox",
        required: false,
      },
    ],
  },
  {
    path: "price-apto",
    step: 7,
    lit_step: "seven",
    name: "",
    description: "¿Cuento cuesta el apartamento?",
    fields: [
      {
        label: "Precio",
        class: "price",
        type: "number",
        required: true,
      },
    ],
  },
  {
    path: "upload-photo",
    step: 8,
    lit_step: "eight",
    name: "",
    description: "Subir foto del apartamento",
    fields: [
      {
        label: "Foto",
        class: "photo",
        type: "file",
        required: true,
      },
    ],
  },
  {
    path: "ascensor-apto",
    step: 9,
    lit_step: "nine",
    name: "",
    description: "¿El apartamento cuenta con ascensor?",
    fields: [
      {
        label: "Parqueadero",
        class: "selector",
        type: "select",
        required: true,
        options: [
          {
            name: "si",
            value: "si",
          },
          {
            name: "no",
            value: "no",
          },
        ],
      },
    ],
  },

  {
    path: "abstract",
    step: 10,
    lit_step: "ten",
    name: "",
    description: "Resumen de los datos",
  },
];
