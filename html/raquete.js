// Raquete details functionality for raquete.html
document.addEventListener('DOMContentLoaded', function() {
    // Dados das raquetes
    const raquetes = {
        wilson: {
            nome: "Wilson Pro Staff",
            img: "https://tse4.mm.bing.net/th/id/OIP.mSSLeWlmAUk2978hlIUfJAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            caracteristicas: [
                "Peso: 315g",
                "Cabeça: 97 in²",
                "Padrão de cordas: 16x19",
                "Equilíbrio: 31cm",
                "Controle e precisão excepcionais"
            ]
        },
        babolat: {
            nome: "Babolat Pure Drive",
            img: "https://media.babolat.com/image/upload/f_auto,q_auto,c_scale,w_700,h_1001/v1599233900/Website_content/Launch_page/Pure_drive/Pure_Drive-1.jpg",
            caracteristicas: [
                "Peso: 300g",
                "Cabeça: 100 in²",
                "Padrão de cordas: 16x19",
                "Equilíbrio: 32cm",
                "Potência e versatilidade"
            ]
        },
        head: {
            nome: "Head Graphene 360",
            img: "https://tse2.mm.bing.net/th/id/OIP.aFZeP4XnKdCf7r1e7s6teQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            caracteristicas: [
                "Peso: 295g",
                "Cabeça: 100 in²",
                "Padrão de cordas: 16x19",
                "Equilíbrio: 32cm",
                "Equilíbrio entre potência e controle"
            ]
        },
        yonex: {
            nome: "Yonex EZONE",
            img: "https://tse2.mm.bing.net/th/id/OIP.kCglg2jS-fBhhVgsguQ4qQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            caracteristicas: [
                "Peso: 285g",
                "Cabeça: 100 in²",
                "Padrão de cordas: 16x19",
                "Equilíbrio: 33cm",
                "Conforto e tecnologia inovadora"
            ]
        }
    };

    // Pega o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const raquete = raquetes[id];

    const container = document.getElementById('raquete-info');
    if (raquete) {
        container.innerHTML = `
            <img src="${raquete.img}" alt="${raquete.nome}">
            <h2>${raquete.nome}</h2>
            <ul>
                ${raquete.caracteristicas.map(c => `<li>${c}</li>`).join('')}
            </ul>
            <a href="index.html">&larr; Voltar</a>
        `;
    } else {
        container.innerHTML = `<p>Raquete não encontrada.</p><a href="index.html">&larr; Voltar</a>`;
    }
});
