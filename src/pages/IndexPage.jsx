import Hero from '../components/index/Hero';
import News from '../components/index/News';
import Featured from '../components/index/Featured';
import Counter from '../components/index/Counter';
import 'animate.css';
import Separtor from '../components/index/Separator';


const IndexPage = () => {


    return (
        <>
            <Hero />
            <Featured />
            <Separtor />
            <News />
        </>
    );
}

export default IndexPage;