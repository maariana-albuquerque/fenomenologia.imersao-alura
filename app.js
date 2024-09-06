function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se o campoPesquisa for uma string vazia
    if(campoPesquisa == "") {
        section.innerHTML = "Parece que nenhum resultado foi encontrado, favor digite novamente e pesquise!";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o campo de pesquisa está contido no nome ou descrição
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento para o resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <div class="imagem-e-texto">
                            <img src=${dado.capa} alt="${dado.alt}">
                            <a href="#" target="_blank">${dado.nome}</a>
                        </div>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="Principais-conceitos">${dado.subtitulo1}<br><br></p>
                    <p class="subtitulo">${dado.conceito1}</p>${dado.conceito11}<br><br>
                    <p class="subtitulo">${dado.conceito2}</p>${dado.conceito22}<br><br>
                    <p class="subtitulo">${dado.conceito3}</p>${dado.conceito33}<br><br>
                    <p class="Principais-conceitos">${dado.subtitulo2}</p>
                    <p ul ="subtitulo2"><li>${dado.Obra1}</li></p>
                    <p ul ="subtitulo2"><li>${dado.Obra2}</li></p><br>
                    <a href="${dado.link}" target="_blank">Clique aqui e saiba mais</a>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (resultados === "") {
        section.innerHTML = "Nenhum resultado foi encontrado para sua pesquisa.";
    } else {
        section.innerHTML = resultados;
    }
}
