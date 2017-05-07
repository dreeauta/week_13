import $ from 'jquery';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

export function next(idx){
  return {
    type: 'next',
    index: idx
  };
}


export function previous(idx){
  return {
    type: 'previous',
    index: idx
  };
}

export function receive_images(){
  return {
    type: 'receive_images',
    images: IMAGES
  };
}
