import { Formik, Field, Form } from 'formik';


import style from 'components/Styles.module.css';
const initialValues = {
  searchForm: '',
};

export default function Searchbar({ onSubmit, search }) {
  const handleSubmit = (values, { resetForm }) => {
    if (search.toLowerCase() !== values.searchForm.toLowerCase().trim()) {
      resetForm();
      onSubmit(values.searchForm);
    } else {
      alert('Uuups!', 'You have already make this search!', 'info');
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <header className={style.Searchbar}>
          <Form className={style.SearchForm}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}></span>
            </button>

            <Field
              name="searchForm"
              className={style.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </header>
      </Formik>
    </>
  );
}