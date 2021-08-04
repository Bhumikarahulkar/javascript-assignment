const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
const newobj = Object.assign({},name,details);
console.log(newobj);

