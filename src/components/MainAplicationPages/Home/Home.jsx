import './Home.css';
import React from 'react';
import OverviewItem from './overviewItem/OverviewItem';
import overViewImg1 from "../../../assets/591965.png"
import overViewImg2 from "../../../assets/591965.png"
import overViewImg3 from "../../../assets/2660366.png"
import overViewImg4 from "../../../assets/3176088.png"

import { listProducts } from "../../../api/dbProducts"
import { listDashboard } from '../../../api/dbDashboard';

const Home = () => {

    return (
        <div className='Home'>
            <div className='general-area'>

                <h2 className="title-General">Visão Geral </h2>

                <div className='overview-area'>
                    <OverviewItem img={overViewImg1} value={0} title={"Vendas hoje"} count={listDashboard[0].sellToday}></OverviewItem>
                    <OverviewItem img={overViewImg2} value={180} title={"Vendas este mês"} count={listDashboard[0].sellMonth}></OverviewItem>
                    <OverviewItem img={overViewImg3} value={180} title={"Total Vendidos"} count={listDashboard[0].sellTotal}></OverviewItem>
                    <OverviewItem img={overViewImg4} value={10} title={"Prod. Em estoque"} count={listDashboard[0].stock}></OverviewItem>
                </div>

            </div>
            <div className="last-sells-area">
                <h2 className="title-last-sells">Últimas Vendas</h2>
                <div className="last-sells-item-area">
                    <table className="last-sells-table">
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Descrição</th>
                                <th>Valor da Unidade (R$)</th>
                                <th>Total de Unidades</th>
                                <th>Valor Total (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.subtitle}</td>
                                    <td>{item.valor.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.valor * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
