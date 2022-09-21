import Hero from '../components/index/Hero';
import News from '../components/index/News';
import Featured from '../components/index/Featured';
import Footer from '../components/sections/Footer';

const IndexPage = () => {

    const contadores = document.querySelectorAll('.counter');
    const speed = 100000;

    const showAnimation = () => {
        for (const contador of contadores) {
            let heightElement = contador.getBoundingClientRect().top;
            let sizeWindow = window.innerHeight * 0.7;
            if (heightElement < sizeWindow) {
                const animateCounter = () => {
                    let maxNumber = +contador.dataset.maxNumber;
                    let currentNumber = +contador.innerText;
                    let increase = maxNumber / speed;

                    if (currentNumber < maxNumber) {
                        contador.innerText = Math.ceil((currentNumber) + increase);
                        setTimeout(animateCounter, 300);
                    } else {
                        contador.innerText = maxNumber;
                    }
                }
                animateCounter();
            }
        }
    };

    document.addEventListener('scroll', () => {
        showAnimation();
        //   header.classList.toggle('header--scroll', scrollY > 0);
    });

    return (
        <>
            <Hero />
            <Featured />
            <section className="separator">
                <div className="container">
                    <div className="separator__container">
                        <h2 className="separator__title">Los mejores de la industria</h2>
                    </div>
                    <div className="separator__columns-flex" >
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="20">20</h3>
                            <p className="separator__columns-flex-paragraph">Empresas confían en nosotros</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="100">100</h3>
                            <p className="separator__columns-flex-paragraph">De satisfacción de nuestros clientes.</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="20">20</h3>
                            <p className="separator__columns-flex-paragraph">Años de lideres en ventas de discos a nivel
                                mundial.</p>
                        </div>
                    </div>
                </div>
            </section>
            <News />
            <Footer/>
        </>
    );
}

export default IndexPage;