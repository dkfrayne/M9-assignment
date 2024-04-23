async function init() {
    // THIS FEELS LIKE IT SHOULDN'T WORK
    return (await (await fetch('/data/employees.json')).json())

    // this is what i had before i experminted^^

    // const response = await fetch('/data/employees.json')
    // if (response.ok) {
    // const employees = await response.json()
    // return employees
    // }
}

export default init