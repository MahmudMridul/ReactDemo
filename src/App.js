import Navigation from './components/layouts/Navigation';
import DataList from './components/DataList';
import { useEffect, useState } from 'react';
import { Button, Spinner } from 'reactstrap';


export default function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [dataList, setDataList] = useState([]);

    useEffect(( ) => {
        fetch('https://fir-879e7-default-rtdb.asia-southeast1.firebasedatabase.app/demodata.json')
        .then(
            response => {
                return response.json();
            }
        )
        .then(dataList => {
            const tempDataList = [];

            for(let key in dataList) {
                let data = {
                    id: key,
                    ...dataList[key]
                };
                tempDataList.push(data);
            }
            setIsLoading(false);
            setDataList(tempDataList);
        })
    }, []);

    if(isLoading) {
        return(
            <Button
                color="primary"
                disabled
                className='m-5'
            >
                <Spinner size="sm">
                    Loading...
                </Spinner>
                <span>
                    {' '}Loading
                </span>
            </Button>
        );
    }

    return (
        <div className='container topGap'>
            <Navigation/>
            <DataList objList={dataList}/>
        </div>
    );
}

// const DUMMY_DATA = [
//     {
//         id: 1,
//         title: 'Title One',
//         description: 'Description one',
//         imageUrl: 'https://picsum.photos/id/237/900/300'
//     }, 
    
// ];




