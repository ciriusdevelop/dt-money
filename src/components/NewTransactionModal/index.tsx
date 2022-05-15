import { FormEvent, useState} from 'react';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';
import iconClose from '../../assets/close.svg';
import IconIncome from '../../assets/income.svg';
import IconOutcome from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose, }: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('entrada');

  async function addNovaTransacao(event: FormEvent) {
    event.preventDefault();
  
  await createTransaction({
    title,
    amount,
    category,
    type,
  });

  setTitle('');
  setAmount(0);
  setType('entrada');
  setCategory('');

  onRequestClose();

}

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={iconClose} alt='Fechar Modal' />
      </button>

      <Container onSubmit={addNovaTransacao}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {
              setType('entrada');
            }}
            isActive={type === 'entrada'}
            activeColor='verde'
          >
            <img src={IconIncome} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {
              setType('saida');
            }}
            isActive={type === 'saida'}
            activeColor='rosa'
          >
            <img src={IconOutcome} alt='Saída' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
