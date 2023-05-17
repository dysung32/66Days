function changeDateFormat(date: Date) {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + (date.getDate() + 1)).slice(-2);

  return `${year}-${month}-${day}`;
}

function getImagePath(imagePath: string) {
  const basePath = `https://hello66days.world/img/`;
  const returnPath = `${basePath}${imagePath}`;
  return returnPath;
}

export { changeDateFormat, getImagePath };
