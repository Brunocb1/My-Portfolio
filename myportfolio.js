function changeText(type) {
    const aboutMeText = document.getElementById('aboutMeText');

    if (type === 'original') {
        aboutMeText.innerHTML = "Pleasure, my name is Bruno Henrique dos Santos, I am a technology enthusiast, I understand that through it, the journey through the world will be more practical and accessible. I have been involved with the digital environment since I was very young and have always tried to learn and study how it all works. I want to become a renowned Developer in the digital job market, I have the capacity, determination, focus and discipline to be among the best qualified in the market. A little about my qualifications: HTML-5, CSS3, Javascript, Python, SQL, Node.js, React and Typescript. I hope to meet the employer's expectations and help the company progress. Thanks!";
    } else if (type === 'reset') {
        aboutMeText.innerHTML = "Prazer, meu nome é Bruno Henrique dos Santos, sou um entusiasta da tecnologia, entendo que através dela a viagem pelo mundo será mais prática e acessível. Estou envolvido com o meio digital desde muito jovem e sempre procurei aprender e estudar como tudo funciona. Quero me tornar um Desenvolvedor renomado no mercado de trabalho digital, tenho capacidade, determinação, foco e disciplina para estar entre os mais qualificados do mercado. Um pouco sobre minhas qualificações: HTML-5, CSS3, Javascript, Python, SQL, Node.js, React e Typescript. Espero atender às expectativas do empregador e ajudar o progresso da empresa. Obrigado!";
    }
}

function saveFeedback() {
    const feedbackInput = document.getElementById('text-input');
    const feedbackValue = feedbackInput.value;

    // Aqui você pode decidir o que fazer com o feedback.
    // Neste exemplo, estou apenas mostrando-o no console.
    console.log('Feedback:', feedbackValue);
    feedbackInput.value = "";
    
    // Se quiser armazenar no localStorage para acesso posterior:
    // localStorage.setItem('feedback', feedbackValue);
}