const Person = ({ name, age }) => {
  return (
    <div className="personBox">
      <p>
        The name of the person is: <span>{name}</span>
      </p>
      <p>
        The age of the person is:<span>{age}</span>
      </p>
    </div>
  );
};

export default Person;
