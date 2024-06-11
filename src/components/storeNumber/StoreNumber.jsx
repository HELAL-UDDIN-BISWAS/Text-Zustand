import { useStore } from "../../store/store_one";


const StoreNumber = () => {
    const {number}=useStore()
    const incriments=useStore((state) => state.incriments)
    const decreiment=useStore((state) => state.decreiment)
    const remove=useStore(state=>state.remove)
    return (
        <div className="text-center">
            <h3 className="text-center text-2xl text-red-300">{number}</h3>
            <button className="bg-amber-100 py-2 px-4 m-2 " onClick={incriments}>Hello ++</button>
            <button className="bg-amber-100 py-2 px-4 m-2" onClick={decreiment}>Hello --</button>
            <button className="bg-amber-100 py-2 px-4 m-2" onClick={remove}>Remove</button>
        </div>
    );
};

export default StoreNumber;