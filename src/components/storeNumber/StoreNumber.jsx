import { useStore } from "../../store/store_one";


const StoreNumber = () => {
    const {number}=useStore()
    const increments=useStore((state) => state.increments)
    const decrement=useStore((state) => state.decrement)
    const remove=useStore(state=>state.remove)
    return (
        <div className="text-center">
            <h3 className="text-center text-2xl text-red-300">{number}</h3>
            <button className="bg-amber-100 py-2 px-4 m-2 " onClick={increments}>Hello ++</button>
            <button className="bg-amber-100 py-2 px-4 m-2" onClick={decrement}>Hello --</button>
            <button className="bg-amber-100 py-2 px-4 m-2" onClick={remove}>Remove</button>
        </div>
    );
};

export default StoreNumber;