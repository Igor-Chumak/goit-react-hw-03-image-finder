import css from './Button.module.css';

export const Button = ({ click }) => {
  return (
    <button type="button" className={css.Button} onClick={click}>
      Load more
    </button>
  );
};
