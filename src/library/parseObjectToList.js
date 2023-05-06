export const parseObjectToList = (data) => {
  let loadedData = [];
  for (let key in data) {
    let temp = {
      id: key,
      date: data[key].date,
      todo: parseTodoList(data[key].todo),
    };

    loadedData.push(temp);
  }
  return loadedData;
};

const parseTodoList = (todo) => {
  let loadedData = [];
  for (let key in todo) {
    let temp = {
      id: key,
      content: todo[key].content,
      isDone: todo[key].isDone,
    };
    loadedData.push(temp);
  }

  return loadedData.reverse();
};
