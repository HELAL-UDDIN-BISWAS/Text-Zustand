import useStore from "../../../store/store";

const StoreOne = () => {
    const {text,setText}=useStore()
    const handaleChange=(e)=>{
        e.preventDefault()
     const result=e.target.value
     console.log(result)
     setText(result)
    }
    return (
        <div className="m-10">
            <input className="border-solid border-2 border-indigo-600" type="text" value={text} onChange={handaleChange} />
        </div>
    );
};

export default StoreOne;