function contagem() {
    let para = document.createElement('p');
    para.textContent = i++;
    document.body.appendChild(para);
    }
   
    const botoes = document.querySelectorAll('button');
    for(var i = 0; i < 10 ; i ++ ) {
    botoes[i].addEventListener('click');
    }

    function debito() {
        let para = document.createElement('p')
        para.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software.'
        document.body.appendChild(para);
    }
        const boto2 = document.querySelectorAll('button');
        for(var i = 0; i < boto2.length ; i++) {
       boto2[i].addEventListener('click', debito);
        }
       
        function criarParagrafo() {
             let para = document.createElement('p');
             para.textContent = 'Você clicou no botão!';
             document.body.appendChild(para);
            }
            const boto3 = document.querySelectorAll('button');
            for(var i = 0; i < boto3.length ; i++) {
            boto3[i].addEventListener('click', criarParagrafo);
            }

            function sonar() {
                window.open("https://medium.com/@cristianvitortrucco/utilizando-o-sonarqube-e-10-minutos-aa9de5749fb3","blank")
            }

            function jenkins() {
                window.open("https://mundodevops.com/blog/primeiros-passos-com-o-jenkins/#:~:text=Assim%20os%20Primeiros%20passos%20com%20o%20Jenkins%20consiste%20entender%20que,na%20dire%C3%A7%C3%A3o%20do%20deploy%20cont%C3%ADnuo.","blank")
            }