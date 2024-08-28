// ASYNCHRONOUS JAVASCRIPT: PROMISES, ASYNC/AWAIT AND AJAX
// Coding Challenge #3
/* 
PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
2. Compare the two versions, think about the big differences, and see which one
you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
PART 2
1. Create an async function 'loadAll' that receives an array of image paths
'imgArr'
2. Use .map to loop over the array, to load all the images with the
'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles)

Test data Part 2: 
['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
3.jpg']. To test, turn off the 'loadNPause' function
*/

// Hồ Hoàng Vân Anh_20098521


const wait = function(seconds) {
  return new Promise(function(resolve) {
      setTimeout(resolve, seconds * 1000)
  })
}

const imageContainer = document.querySelector('.images');
let currentImage;

const createImage = function(imgPath){
  return new Promise(function(resolve, reject) {
      const image = document.createElement('img')
      image.src = imgPath;

      image.addEventListener('load', function() {
          imageContainer.append(image);
          resolve(image)
      })

      image.addEventListener('error', function() {
          reject(new Error('Image not found'))
      })
  })
}

/* createImage('./img/img-1.jpg')
.then( img => {
  currentImage = img
  console.log('Image 1 loaded');
  return wait(2);
})
.then(() => {
  currentImage.style.display = 'none'
  return createImage('./img/img-2.jpg')
})
.then( img => {
  currentImage = img
  console.log('Image 2 loaded');
  return wait(2);
})
.then(() => {
  currentImage.style.display = 'none';
})
.catch(err => console.error(err)) */


/* const loadNPause = async function () {
  try {
      // Img 1
      const img1 = await createImage('./img/img-1.jpg');
      currentImage = img1
      console.log('Image 1 loaded');
      await wait(2)
      currentImage.style.display = 'none'
      console.log('Image 1 removed');
      await wait(2)

      // Img 2
      const img2 = await createImage('./img/img-2.jpg');
      currentImage = img2
      console.log('Image 2 loaded');
      await wait(2)
      currentImage.style.display = 'none'
      console.log('Image 2 removed');
      await wait(2)

      // Img 2
      const img3 = await createImage('./img/img-3.jpg');
      currentImage = img3
      console.log('Image 3 loaded');
      await wait(2)
      currentImage.style.display = 'none'
      console.log('Image 3 removed');
      await wait(2)

  } catch (err){
      console.error(err.message);
  }
}
loadNPause() */


const loadAll = async function(imgArr){
  try {
      const imgs = imgArr.map( async img => await createImage(img))
      console.log(imgs);

      const imgsEl = await Promise.all(imgs);
      console.log(imgsEl);

      imgsEl.forEach(img => img.classList.add('parallel'))

  } catch (error) {
      console.error(error.message);
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])