/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  // Landing page content
  heroHeading: string;
  heroSubtext: string;
  declarationText: string;
  declarationSubtext: string;
  // Appearance
  backgroundColor: string;
  textColor: string;
  accentColor: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Halo Veronica",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#C9848A",
    secondary: "#0D0A0B",
    accent: "#D4A0A0",
  },
  // Landing page content
  heroHeading: "Halo Veronica",
  heroSubtext: "ada sesuatu yang ingin aku sampaikan",
  declarationText: "I Love You",
  declarationSubtext: "selalu dan selamanya",
  // Appearance
  backgroundColor: "#0D0A0B",
  textColor: "#F5EFE6",
  accentColor: "#C9848A",
};
