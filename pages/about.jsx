import axios from "axios";


const About = (props) => {

// console.log(props);


  return (
    <div>About</div>
  )
}


export const getServerSideProps = async() =>{

   const res = await axios.get('https://github.com/public/', {headers:{
    Authorization: {'Content-Type': 'json/application'}
   }})
     console.log(res);

    return{
        props: {res}
    }
}

export default About