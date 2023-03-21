import style from 'components/Styles.module.css';


export const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={style.Button}>
      Load more
    </button>
  );
};

