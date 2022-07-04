const employee = {
        name: "John",
        address: "11th and Broad"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj,
    [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj
}
function deleteFromEmployeeByKey (obj) {
    const newObj = {...obj}
    delete newObj.name

    return newObj
}
function destructivelyDeleteFromEmployeeByKey(obj) {
    delete obj.name

    return obj
}