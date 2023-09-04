import React from 'react'
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS =[
   {
    id :'m1',
    title : 'First meetup',
    image :'https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?w=1060&t=st=1693855432~exp=1693856032~hmac=1fa29ffaa1356808bf1cef7e38e3b1059e53fc2c742678073e8f56fe7f04b12e',
    address : 'Gaurakshani',
    description : 'First meetup'
   },
   {
    id :'m2',
    title : 'Second meetup',
    image :'https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?w=1060&t=st=1693855432~exp=1693856032~hmac=1fa29ffaa1356808bf1cef7e38e3b1059e53fc2c742678073e8f56fe7f04b12e',
    address : 'Gaurakshani',
    description : 'Second meetup'
   }
]
const HomePage = () => {
  return (
    <>
        <MeetupList meetups={DUMMY_MEETUPS}/>
    </>
  )
}

export default HomePage;