function trim(name)
{
    let a=name.trim();
    console.log(a);
}
function uppercase(name)
{
    let a=name.toUpperCase();
    console.log(a);
}
function lowercase(name)
{
    let a=name.toLowerCase();
    console.log(a);
}
module.exports.trimName=trim;
module.exports.uppercaseName=uppercase;
module.exports.lowercaseName=lowercase;