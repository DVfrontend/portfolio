export type Socials = {
  name: string,
  id: number,
  url: string
}

export type Project = {
  id: number,
  title: string,
  technologies: string[];
};

export type LayoutProps = {
  children: React.ReactNode;
}