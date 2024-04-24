import { useState } from "react";

const AddCategory = ({ setCategory }) => {
    
    const [value, setValue] = useState("");

    return (
        <>
            <h2>Add Category</h2>
            {value}
            <form action="">
                <input type="text" placeholder="search..."
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </>
    );
}
export default AddCategory;