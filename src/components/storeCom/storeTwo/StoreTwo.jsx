import useStore from "../../../store/store";


const StoreTwo = () => {
    const {text}=useStore()
    return (
        <div>
            hell
<h2>{text}</h2>
        </div>
    );
};

export default StoreTwo;