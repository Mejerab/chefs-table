import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowingFood = () => {
    const [food, setFood] = useState([]);
    const [count, setCount] = useState(0);
    const [names, setNames] = useState([]);
    const [items, setItems] = useState([]);
    const [cooking, setCooking] = useState(0);
    const [prepare, setPrepare] = useState([]);
    const [total, setTotal] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    const handleClicked = (name, time, cal) => {
        if (!names.includes(name)) {
            names.push(name)
            setCount(count + 1)
            const item = { name, time, cal };
            items.push(item)
        }
        else {
            toast.error('Already exists.')
        }
    }
    const handlePrepare = (item) => {
        const newItems = items.filter(it=>it.name !== item.name);
        setItems(newItems)
        setCooking(cooking + 1)
        setCount(count - 1)
        prepare.push(item);
        prepare.forEach(it => {
           setTotal(total + parseInt(it.time))
        });
        prepare.forEach(it => {
           setCal(cal + parseInt(it.cal))
        });
    }
    
    
    return (
        <div className="flex mr-2 justify-between">
            <div className="grid grid-cols-2 gap-12 w-7/12">
                {
                    food.map((one, idx) =>
                        <div key={idx} className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={one.image}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body flex">
                                <h2 className="card-title ">{one.recipe_name}</h2>
                                <p className="text-gray-500 border-b pb-3 mb-3">{one.short_description}</p>
                                <div className="border-b pb-3 mb-3">
                                    <p className="text-gray-500 text-lg">Ingredients: {one.ingredients.length}</p>
                                    <ul className="ml-12">
                                        {
                                            one.ingredients.map((ing, idx) =>
                                                <li className="list-disc text-gray-500" key={idx}>{ing}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="flex ">
                                    <p className="flex items-center text-gray-500"><FaFire />{one.preparing_time} minutes</p>
                                    <p className="flex items-center text-gray-500"><FaFire />{one.calories} calories</p>
                                </div>
                                <div className="card-actions">
                                    <button onClick={() => handleClicked(one.recipe_name, one.preparing_time, one.calories)} className="btn rounded-full font-bold text-md bg-[#0BE58A] text-black">Want To Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="border rounded-2xl pt-5 text-center w-4/12">
                <h4 className="text-2xl font-bold border-b mx-12">Want to cook: {count}</h4>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, idx) =>
                                <tr key={idx} className="text-center">
                                    <th>1</th>
                                    <td>{item.name}</td>
                                    <td>{item.time} minutes</td>
                                    <td>{item.cal} calories</td>
                                    <td><button onClick={() => handlePrepare(item)} className="btn rounded-full font-bold text-md bg-[#0BE58A] text-black">Preparing</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <h4 className="text-2xl font-bold border-b mx-12 mt-5">Currently cooking: {cooking}</h4>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {prepare.map((item, idx) =>
                                <tr key={idx} className="text-center">
                                    <th>1</th>
                                    <td>{item.name}</td>
                                    <td>{item.time} minutes</td>
                                    <td>{item.cal} calories</td>
                                </tr>)
                            }
                            <tr className="text-right">
                                <td></td>
                                <td></td>
                                <td>Total Time = {total} minutes</td>
                                <td>Total Calories = {cal} calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShowingFood;