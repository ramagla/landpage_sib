export type Evidence = {
  kind: "image" | "gif" | "video";
  src: string;
  title: string;
  caption?: string;
};

export type Feature = {
  title: string;
  description: string;
  evidence?: Evidence[];
};

export type Module = {
  id: string;
  icon: string;
  name: string;
  summary: string;
  features: Feature[];
};
