import { Container } from "./styles";

export function TransactionsTable() {
  return <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Titulo</td>
          <td className="deposit">R$100</td>
          <td>categiria</td>
          <td>20/02/2020</td>
        </tr>
        <tr>
          <td>Titulo</td>
          <td className="withdraw">R$100</td>
          <td>categiria</td>
          <td>20/02/2020</td>
        </tr>
      </tbody>
    </table>
  </Container>
}