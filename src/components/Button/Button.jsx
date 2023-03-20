import style from 'components/Styles.module.css';
import Loader from 'components/Loader/Loader';
function Button({ onClick, loading }) {
  return (
    <>
      <button type="button" className={style.Button} onClick={onClick}>
        {loading ? <Loader /> : 'Load More'}
      </button>
    </>
  );
}

export { Button };