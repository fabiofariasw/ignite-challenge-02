import { ReactNode} from 'react';

import './content.scss'

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  children: ReactNode;
}

export function Content({ selectedGenre, children  }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  );
}