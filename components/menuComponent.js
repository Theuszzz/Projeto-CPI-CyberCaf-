const menuTemplateComponent = {
    template:
    /*html*/`<section id="main-banner">
            <h1>CyberCafé</h1>
            <img id="icon" :src="icon" alt="banner">
            <div id="logo-content">
                <img id="logo" :src="logo" alt="logo">
            </div>
            <nav>
                <a href="index.html">Home</a>
                <a href="sachês.html">Saches</a>
                <a href="maquinas.html">Maquinas</a>
                <a href="compras.html">Compras</a>
            </nav>
            
        </section>`,
        data() {
            return {
                icon: '/img/pngtree-free-wifi-sign-for-cafe-vector-png-image_9220643.png',
                logo: '/img/logo.png'
            }
        }

}
export default menuTemplateComponent;