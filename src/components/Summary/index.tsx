import { Container } from './styles';
import iconIncome from '../../assets/income.svg';
import iconOutcome from '../../assets/outcome.svg';
import iconTotal from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {

      if (transaction.type === 'entrada') {
        acc.entradas += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.saidas += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      entradas: 0,
      saidas: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconIncome} alt='Entradas' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.entradas)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={iconOutcome} alt='Saídas' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(- summary.saidas)}
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={iconTotal} alt='Total' />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
