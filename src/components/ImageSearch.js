import react, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ImageSearch = ({ searchText }) =>{
    const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        searchText(text);
    };
    return(
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b-2 py-2 border-gray-300 bg-gray-25">
                    <input onChange={e =>setText(e.target.value)}
                     className="appearance-none bg-transparent border-none w-full 
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                     type="text" placeholder="search image Term..."></input>
                    <button  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700
                    border-teal-500 hover:border-teal-700 text-sm border-4 text-white
                    py-1 px-2 rounded bg-green-500 hover:bg-green-700" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
} 
export default ImageSearch;