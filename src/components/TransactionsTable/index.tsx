import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log (data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20.02.22</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withraw"> -R$1.100</td>
                        <td>Casa</td>
                        <td>17.02.22</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}