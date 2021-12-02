export const fileReader = (event) => {
  console.log(event);
  const {
    target: { files },
  } = event;
  const theFile = files[0];
  const reader = new FileReader();

  if (theFile) {
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      return result;
    };
  }
};
