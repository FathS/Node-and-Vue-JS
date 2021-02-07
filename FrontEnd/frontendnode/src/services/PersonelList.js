import axios from 'axios'

export const getList = async () => {
    const response = await axios.get("http://localhost:5000/");
    return response.data;
};

export const addPersonel = async (personel) => {
    const response = await axios.post("http://localhost:5000/", personel);
    return response.data;
}


// module.export = getList()
