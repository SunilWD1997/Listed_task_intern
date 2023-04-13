

const Card = ({item}) => {

    console.log(item)
  return (
    <div className={`${item?.bg} flex flex-col rounded-[20px] p-[18px]`}>
        <div className="self-end text-[30px]">
        {item?.icons}
        </div>
        <div>{item?.title} </div>
        
        <div className="text-[25px] font-[700]">
        {item?.count}
        </div>
       
        </div>
  )
}

export default Card;