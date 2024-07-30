

const BestCuisines = (props)=>{

    const {resData} = props;
    const {text,link} = resData;

      return (
        <button ><a href={link}>{text}</a></button>
      )
}