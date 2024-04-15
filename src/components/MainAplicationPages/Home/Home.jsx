import './Home.css';
import React from 'react';
import OverviewItem from './overviewItem/OverviewItem';
import overViewImg1 from "../../../assets/591965.png"
import overViewImg2 from "../../../assets/591965.png"
import overViewImg3 from "../../../assets/2660366.png"
import overViewImg4 from "../../../assets/3176088.png"

const Home = () => {

    let items = [1,2,3,4,5,6,7,8,9,10,12,11,31]
    return ( 
        <div className='Home'>
            <div className='general-area'>

                <h2 className="title-General">Visão Geral </h2>

                <div className='overview-area'>
                    <OverviewItem img={overViewImg1} value={180} title={"Vendas hoje"} count={"45"}></OverviewItem>
                    <OverviewItem img={overViewImg2} value={345} title={"Vendas este mês"} count={"80"}></OverviewItem>
                    <OverviewItem img={overViewImg3} value={546} title={"Total Vendidos"} count={"120"}></OverviewItem>
                    <OverviewItem img={overViewImg4} value={180} title={"Prod. Em estoque"} count={"20"}></OverviewItem>
                </div>

            </div>
                <div className="last-sells-area">
                    <h2 className="title-last-sells">Últimas Vendas</h2>
                    <div className="last-sells-item-area">
                       {items.map((item)=>{
                        return(<div className="last-sells-item">
                        <div>
                            <p>nome produto</p>
                        </div>
                        <div>
                            <p>descrição</p>
                        </div>
                        <div>
                            <p>R$10,00</p>
                        </div>
                        <div>
                            <p>1</p>
                        </div>
                        <div>
                            <p>R$ 10,00</p>
                        </div>
                </div>)
                       })}
                    </div>
                </div>
        </div>
     );
}
 
export default Home;
