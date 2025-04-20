
import "../styles/Tutors.css";
function Tutors(props) {
  return (
    <div className="tutor-list">
      {
        props.tutorsList.map((item,i)=>{
          return(
            <div className="kartu-tutor" key={i}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Tutors
