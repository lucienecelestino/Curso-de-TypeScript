// Interfaces
interface Post {
  title: string;
}

interface Conteudo {
  descricao: string;
}

// Extend | interseção
interface PostBlog extends Post, Conteudo {
}

// Funções dentro da interface
interface getCategorias {
  (id: string): void;
}

// <<<<<<< Diferenças >>>>>>>
interface userID extends string | number {

}

// Tuplas não vão ser tipadas
interface Tupla {
  0: number;
  1: number;
}

[1, 2, 3] as Tupla;
[1, 4] as Tupla;
[1, 15] as Tupla;

// Interface pode ter múltiplas declarações e ela une do mesmo nome
interface MinhaBiblioteca {
  prop1: string;
}

interface MinhaBiblioteca {
  prop2: string;
}

const TesteBiblioteca: MinhaBiblioteca = {
  prop1: "Nome 1",
  prop2: "Nome 2"
}



// Type Alias
type Post2 = {
    title: string;
  }
  
  type Conteudo2 = {
    descricao: string;
  }
  
  // Extend | interseção
  type PostBlog2 = Post2 & Conteudo2;
  
  // Funções dentro do type alias
  type getCategorias2 = (id: string) => void;
  
  // << Diferenças >>
  type userID2 = string | number;
  
  // Tuplas com tipagem com TYPE
  type Tupla2 = [number, number];
  
  [1, 2] as Tupla2; // OK
  // [1, 2, 3] as Tupla2; // erro: Type '[number, number, number]' não pode ser atribuído ao tipo 'Tupla2'
  
  // Não podemos ter múltiplas declarações com o mesmo nome
  type MinhaBiblioteca2 = {
    prop1: string;
  }
  
  // type MinhaBiblioteca2 = {     // ← erro: Duplicate identifier 'MinhaBiblioteca2'
  //   prop2: string;
  // }