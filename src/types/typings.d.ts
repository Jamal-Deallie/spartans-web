export interface SEOResults {
  title?: string;
  description?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  keywords?: string | undefined;
}
