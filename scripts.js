let sobre = document.querySelector("#about")
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/Sabrinaporfilia")
        const perfil = await dadosPerfil.json()

        let conteudo = `
        <img class="eu" src="${perfil.avatar_url}" alt="Foto do Autor - ${perfil.name}" >
        <article class="section_content">
            <h1>Quem sou eu?</h1>
            <p>
                Olá! Me chamo Sabrina, tenho 23 anos e sou apaixonada em tecnologia, aqui irei mostrar um pouquinho do que faço!
            </p>

            <div class="section_github flex">
                <a class ="btn" href="${perfil.html_url}">Github</a>
                <p>${perfil.followers} Seguidores</p>
                <p>${perfil.public_repos} Repositórios</p>
            </div>
            </article>
        `
        sobre.innerHTML += conteudo

        //Função Assincrona
    } catch (error) {
        console.log(error)
    }
}

function changeTheme(){
    document.body.classList.toggle("dark-theme")
}

getApiGithub()
