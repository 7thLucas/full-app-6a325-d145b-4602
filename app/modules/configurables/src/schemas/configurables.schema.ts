/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent",
        },
      ],
    },
    {
      fieldName: "heroHeading",
      type: "string",
      required: true,
      label: "Hero Heading",
      maxLength: 100,
    },
    {
      fieldName: "heroSubtext",
      type: "string",
      required: false,
      label: "Hero Subtext",
      maxLength: 200,
    },
    {
      fieldName: "declarationText",
      type: "string",
      required: true,
      label: "Declaration Text",
      maxLength: 100,
    },
    {
      fieldName: "declarationSubtext",
      type: "string",
      required: false,
      label: "Declaration Subtext",
      maxLength: 200,
    },
    {
      fieldName: "backgroundColor",
      type: "color",
      required: true,
      label: "Background Color",
    },
    {
      fieldName: "textColor",
      type: "color",
      required: true,
      label: "Text Color",
    },
    {
      fieldName: "accentColor",
      type: "color",
      required: true,
      label: "Accent Color",
    },
  ],
};