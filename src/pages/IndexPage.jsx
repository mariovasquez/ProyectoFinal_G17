import Hero from '../components/index/Hero';
import News from '../components/index/News';
import Featured from '../components/index/Featured';
import Counter from '../components/index/Counter';
import 'animate.css';


const IndexPage = () => {


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
                            <h3 className="separator__columns-flex-title counter"><Counter end={500} start={0} /></h3>
                            <p className="separator__columns-flex-paragraph">Empresas confían en nosotros</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter"><Counter end={100} start={0} /></h3>
                            <p className="separator__columns-flex-paragraph">De satisfacción de nuestros clientes.</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter"><Counter end={30} start={0}/></h3>
                            <p className="separator__columns-flex-paragraph">Años de lideres en ventas de discos a nivel
                                mundial.</p>
                        </div>
                    </div>
                </div>
            </section>
            <News />
        </>
    );
}

export default IndexPage;