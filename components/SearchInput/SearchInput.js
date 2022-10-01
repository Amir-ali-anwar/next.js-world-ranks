import style from './SearchInput.module.css'
const SearchInput = ({...rest}) => {
  return (
    <div className={style.wrapper}>
      <input style={style.input} {...rest} />
    </div>
  );
}

export default SearchInput