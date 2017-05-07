export const addtoCard = (item) => {
  console.log("adding item ", item);
  return {
    type: 'add',
    item
  };
}
