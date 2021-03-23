export const MoveImgLeft = (images, currentImg, setCurrentImg) => {
    currentImg > 0 ? setCurrentImg(currentImg -1) : setCurrentImg(images.length -1)
};

export const MoveImgRight = (images, currentImg, setCurrentImg) => {
    currentImg < images.length-1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0);
};