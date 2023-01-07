import DataList from './DataList';

export default function DataListContainer() {
    return (
        <DataList objList={DUMMY_DATA}/>
    );
}

const DUMMY_DATA = [
    {
        id: 1,
        title: 'Title One',
        description: 'Description one',
        imageUrl: 'https://picsum.photos/id/237/900/300'
    }, 
    {
        id: 2,
        title: 'Title Two',
        description: 'Description two',
        imageUrl: 'https://picsum.photos/id/238/900/300'
    },
    {
        id: 3,
        title: 'Title Three',
        description: 'Description three',
        imageUrl: 'https://picsum.photos/id/236/900/300'
    },
    {
        id: 4,
        title: 'Title Four',
        description: 'Description four',
        imageUrl: 'https://picsum.photos/id/235/900/300'
    },
    {
        id: 4,
        title: 'Title Four',
        description: 'Description four',
        imageUrl: 'https://picsum.photos/id/235/900/300'
    }
];


