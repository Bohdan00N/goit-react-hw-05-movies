const FilmSearch = ({ film }) => {
    let filmName = null;
  try {
    filmName = film.original_title.toLowerCase();
    if (filmName === '' || filmName === undefined) {
      filmName = film.name;
    }
  } catch (error) {
    console.log(error);
  }
  return <li id={film.id}>{filmName}</li>;
};
export default FilmSearch;
