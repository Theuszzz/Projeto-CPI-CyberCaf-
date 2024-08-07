const sacheTemplateComponent = {
    template:
    /*html*/
    `
    
            <img src="Camada_1.png" alt="Banner">
            <div id="banner-lojas">
                <section id="loc-lojas">
                    <div class="card">
                        <div class="content">
                            <h6>Dolce Gusto (Caixa 16 capsulas):</h6>
                            
                                <img :src="capsula1" id="img-card" alt="Dolce Gusto" >
                            
                            <p>
                            Expresso 96g - R$24,00</p>
                            <p>
                            Descafeinado 96g- R$ 21,00</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h6>Senseo(18 sachês):</h6>
                            
                                <img :src="capsula2" id="img-card" alt="Senseo">
                            
                            <p>Classico 120g - R$ 14,00</p>
                            <p>Intenso 120 g - R$ 14,00</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h6>Nespresso(20 capsulas):</h6>
                            
                                <img :src="capsula3" id="img-card" alt="Dolce Gusto">
                            
                            <p>Livanto - R$ 35,00</p>
                            <p>Ristretto - R$42,00
                            <p>Vanilio - R$ 46,00</p>
                        </div>
                    </div>
                </section>
            </div>
        
    `,
    data(){
        return{
            capsula1: '/img/capsula1.png',
            capsula2: '/img/capsula2.jpg',
            capsula3: '/img/capsula3.jpg'
        }
    }
};

export default sacheTemplateComponent;
