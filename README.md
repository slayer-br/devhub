# 🎉 DevHub - Social Network for Developers

O **DevHub** é uma rede social modelo, desenvolvida como exercício prático do módulo de **Bootstrap e Sass** do curso da **OneBitCode**. O objetivo principal é demonstrar a personalização do Bootstrap 5 e a estruturação de uma interface de usuário completa, responsiva e com recursos modernos.

---

## 📸 Prévia do projeto

| 💻 Versão Desktop |
|-------------------|
| ![Desktop](/src/images/devhub.gif) |

---

## 🔗 Links

- GitHub: <a href="https://github.com/slayer-br/devhub" target="_blank" rel="noopener noreferrer">DevHub</a>
- Site ao vivo: <a href="https://slayer-br.github.io/devhub/" target="_blank" rel="noopener noreferrer">DevHub</a>

---


## ✨ Funcionalidades Principais

* **Navegação Completa:** Barra de navegação responsiva com links, campo de busca e menu *dropdown* de opções.
* **Layout Adaptativo:** Estrutura de três colunas (Sidebar Esquerda, Feed Central e Sidebar Direita) que se adapta perfeitamente a dispositivos móveis e desktops, utilizando o sistema de *Grid* do Bootstrap.
* **Feed de Posts:** Seção central com cards de posts modelados, incluindo botões de interação.
* **Modal de Criação de Post:** Um *input* no topo do feed aciona um **Modal** (controlado via JavaScript) para a criação de novas publicações.
* **Tema Dinâmico (Dark/Light):** Alternância instantânea entre os temas Escuro (`dark`) e Claro (`light`) do Bootstrap, controlada via JavaScript no *dropdown* de opções.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com uma *stack* de desenvolvimento moderna e eficiente:

* **Frontend:** HTML5, JavaScript (Vanilla JS)
* **Estilização:** **Bootstrap 5** (importado via Sass), **Sass (SCSS)** para personalização profunda.
* **Ícones:** [Bootstrap Icons](https://icons.getbootstrap.com/) (importados via CDN no HTML).
* **Build Tool:** **Vite** para empacotamento rápido e ambiente de desenvolvimento local.

---

## 🎨 Customização (Sass)

O Bootstrap foi importado de forma modular em `src/scss/_bootstrap.scss`. A customização principal é definida em `src/scss/_variables.scss`:

* **Cor Primária:** O `$primary` foi redefinido para **Ciano** (`$cyan`) para um visual moderno.
* **Variáveis de Tema:** A variável `$body-bg` foi definida para `$gray-300` no tema claro inicial, e o `data-bs-theme="dark"` é aplicado ao `<html>` por padrão.
* **Componentes:** Bordas de cards (`$card-border-radius: 1rem;`) e botões arredondados (`$btn-border-radius: 999rem;`) foram customizados.

---

## ⚙️ Como Executar o Projeto

Para visualizar e trabalhar neste projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados.

### Instruções

1.  **Acesse o diretório do projeto:**
    ```bash
    cd <caminho-do-projeto>
    ```

2.  **Instale as dependências (Bootstrap, etc.):**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento com o Vite:**
    ```bash
    npm run dev
    ```

---

## ✨ Autor

- GitHub - <a href="https://github.com/slayer-br" target="_blank" rel="noopener noreferrer">@slayer-br</a>
- LinkedIn - <a href="https://www.linkedin.com/in/carlos-alberto-da-silva-93758b270/" target="_blank" rel="noopener noreferrer">@slayer-br</a>

---

## 📜 Licença  

Este projeto está sob a **Licença MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes. 

Projeto do módulo **Bootstrap e Sass** – [OneBitCode](https://onebitcode.com)