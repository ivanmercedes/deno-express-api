import { Type } from "npm:@sinclair/typebox";

export const taskSchema = Type.Object(
  {
    title: Type.String({
      errorMessage: {
        type: "El tipo debe ser string",
      },
    }),
    description: Type.String({
      errorMessage: {
        type: "El tipo debe ser string",
      },
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      required: {
        title: "El titulo es obligatorio",
        description: "La descripción es obligatoria",
      },
      additionalProperties:
        "El formato del objecto no es valido solo esta permitido (title, description)",
    },
  },
);

export const taskByIdSchema = Type.Object(
  {
    id: Type.String({
      errorMessage: {
        type: "El tipo debe ser string",
      },
    }),
    description: Type.String({
      errorMessage: {
        type: "El tipo debe ser string",
      },
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      required: {
        title: "El titulo es obligatorio",
        description: "La descripción es obligatoria",
      },
      additionalProperties:
        "El formato del objecto no es valido solo esta permitido (title, description)",
    },
  },
);
