export default function SearchForm({ handleSetQuery, handleSubmit, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="movie name" onChange={handleSetQuery} value={value} />
      <button type="submit">Search</button>
    </form>
  );
}
