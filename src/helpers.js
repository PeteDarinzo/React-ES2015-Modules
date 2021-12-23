import React from "react";

const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  const item = items[idx];
  return item;
}



const remove = (items, item) => {
  const idx = items.indexOf(item);
  if (idx >= 0) {
    const removedItem = items.splice(idx, 1);
    return removedItem[0];
  } else {
    return undefined;
  }
}


export { choice, remove }

