const imageData = {
  "outreach": {
    "sixteen": [],
    "eighteen": [],
    "twenty": []
  }
};

const importImages = async () => {
  const imagesSixteen = [];
  const imagesEighteen = [];
  const imagesTwenty = [];

  for (let i = 1; i <= 11; i++) {
    const imageSixteen = import(`../../Assets/outreach/sixteen/2016image${i}.jpg`);
    imagesSixteen.push(imageSixteen);
  }
  for (let i =1; i <= 17; i++) {
    const imageEighteen = import(`../../Assets/outreach/eighteen/2018image${i}.jpg`);
    imagesEighteen.push(imageEighteen);
  }
  for (let i = 1; i <= 31; i++) {
    const imageTwenty = import(`../../Assets/outreach/twenty/2020image${i}..jpg`);
    imagesTwenty.push(imageTwenty);
  }

  imageData.outreach.sixteen = await Promise.all(imagesSixteen);
  imageData.outreach.eighteen = await Promise.all(imagesEighteen);
  imageData.outreach.twenty = await Promise.all(imagesTwenty);

  // Add other years and image paths here

  console.log(imageData); // Verify the imported images in the console
};

importImages();

export default imageData;
