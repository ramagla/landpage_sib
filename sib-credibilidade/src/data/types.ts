export type Evidence = {
  kind: "image" | "gif" | "video" | "embed";
  src: string;
  title: string;
  caption?: string;

  /**
   * Link opcional para a mídia hospedada (ex.: vídeo no Canva/drive).
   * Use quando quiser abrir a evidência em uma aba externa, mantendo o src local para preview.
   */
  canvasUrl?: string;
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
