import PropTypes from 'prop-types';
import { Container } from 'components/container/container';
import styles from './TransactionHistory.module.css';
import { type } from '@testing-library/user-event/dist/type';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Container>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

TransactionHistory.prototype = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
