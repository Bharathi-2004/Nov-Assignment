function Card({ info, children }) {
  return (
    <>
      {children}
      <div className="card">
        <h6></h6>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
      </div>
    </>
  );
}

export default Card;