export type Styles = {
  actions: string;
  content: string;
  header: string;
  page: string;
  resizer: string;
  sidebar: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
