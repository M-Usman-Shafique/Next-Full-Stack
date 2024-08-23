
export default function addTest() {

    const handleSubmitTest = async () => {
        let data = await fetch("http://localhost:3000/products", {
            method: "POST",
            body: JSON.stringify({name, color, price})
        })

        data = await data.json()
        if (data.success) alert("added.")
            else alert()

    }
  return (
    <div>page</div>
  )
}