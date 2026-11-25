import Card from "./Card";

function Child() {
  const students = [
    { name: "Parthiban", age: "23" },
    { name: "Arun", age: "21" },
    { name: "Kavya", age: "22" },
  ];

  return (
    <>
    {students.map((student, index) => (
        <Card key={index} info={student}>
        </Card>
      ))}
    </>
  );
}

export default Child;