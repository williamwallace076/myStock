import './Home.css';
import React from 'react';

const Home = () => {

    let items = [1,2,3,4,5,6,7,8,9,10,12,11,31]
    return ( 
        <div className='Home'>
            <div className='general-area'>

                <h2 className="title-General">Visão Geral </h2>

                <div className='overview-area'>
                    <div className="item-overview" style={{backgroundColor:"lightblue"}}>
                        <h3 className="title-item-overview">Vendas Hoje</h3>
                        <span className="info-item-overview">45</span>
                    </div>
                    <div className="item-overview" style={{backgroundColor:"lightgreen"}}>
                        <h3 className="title-item-overview">Produtos</h3>
                        <span className="info-item-overview">80</span>
                    </div>
                    <div className="item-overview" style={{backgroundColor:"lightcoral"}}>
                        <h3 className="title-item-overview">Total Prod. Vendidos</h3>
                        <span className="info-item-overview">60</span>
                    </div>
                    <div className="item-overview" style={{backgroundColor:"lightyellow"}}>
                        <h3 className="title-item-overview">Prod. restantes</h3>
                        <span className="info-item-overview">20</span>
                    </div>
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