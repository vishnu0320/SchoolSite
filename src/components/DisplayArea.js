import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { Card } from 'react-bootstrap';
import List from './List';
const images = [
  {
    url:
      'https://www.mcgill.ca/oss/files/oss/styles/hd/public/screen_shot_2019-09-20_at_11.33.41_am.png?itok=I0n94ii7&timestamp=1568993730',
  },
  {
    url: 'https://michaelhyatt.com/wp-content/uploads/2018/04/pen-on-paper.jpg',
  },
  {
    url:
      'https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg',
  },
];

function DisplayArea() {
  return (
    <div className='DisplayArea'>
      <div className='slider'>
        <SimpleImageSlider width={'100%'} height={350} images={images} />
        <div className='WelcomeText'>
          <div className='imageText'>Welcome to ABC School</div>
          <input type='button' value='Admissions' className='btn' />
        </div>
      </div>
      <List />
      <div className='cardCantainer'>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={
              'https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_640.jpg'
            }
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={
              'https://cdn.pixabay.com/photo/2016/06/29/08/50/pencil-1486278_640.jpg'
            }
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={
              'https://cdn.pixabay.com/photo/2016/10/30/05/43/school-1782427_640.jpg'
            }
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={
              'https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_640.jpg'
            }
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DisplayArea;
