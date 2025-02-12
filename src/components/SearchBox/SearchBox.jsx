import s from "./SearchBox.module.css";

const SearchBox = (props) => {
  return (
    <div className={s.div}>
      <p className={s.p}>Find contacts by name</p>
      <input
        className={s.input}
        key={props.filter.id}
        type="text"
        name="search"
        value={props.filter}
        onChange={(e) => props.onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
