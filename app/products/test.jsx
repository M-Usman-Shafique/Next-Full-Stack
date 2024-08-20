
const getTestDetails = async (id) => {
let data = await fetch(`http://localhost:3000/tests/${id}`)
return data = data.json();
}
function testDetails({ params }) {
    const id = params.testid;
    let test = getTestDetails(id);
    test = test.result;
  return (
    <div>test</div>
  )
}

export default test