# Tênis Mundo Site

Um site informativo sobre o universo do tênis, trazendo dicas, curiosidades, grandes momentos do esporte e uma seleção das melhores raquetes do mercado.

## Funcionalidades

- **Slider de grandes momentos:** Imagens marcantes do tênis mundial.
- **Dicas para jogadores:** Sugestões para melhorar seu desempenho nas quadras.
- **Sobre o tênis:** Breve explicação sobre o esporte e suas características.
- **Seleção de raquetes:** Cards interativos com as melhores raquetes, levando a uma página de detalhes de cada modelo.

## Como usar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/CaioGitHub/tenis-mundo-site.git
   cd tenis-mundo-site
   ```

2. **Execute o projeto com Docker Compose:**
   ```sh
   docker compose up -d
   ```

3. **Acesse o site em:**  
   [http://localhost:8080](http://localhost:8080)

> Certifique-se de ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados em sua máquina.

## Estrutura

- `html/index.html` — Página principal do site.
- `html/raquete.html` — Página de detalhes de cada raquete.
- Imagens e estilos são carregados via links externos e CSS embutido.

## Tecnologias

- HTML5
- CSS3
- JavaScript (para navegação dinâmica das raquetes)

---