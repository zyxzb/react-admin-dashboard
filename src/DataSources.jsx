import {nanoid} from 'nanoid'

//temporary data

export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 260
    }, {
        field: 'username',
        headerName: 'User',
        width: 130
    }, {
        field: 'email',
        headerName: 'E-mali',
        width: 130
    }, {
        field: 'phone',
        headerName: 'Phone',
        width: 150
    }, {
        field: 'address',
        headerName: 'Address',
        width: 200
    }, {
        field: 'status',
        headerName: 'Status',
        width: 200,
        renderCell: (params) => {
            return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
]

export const userRows = [
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "inactive",
        email: "xyz@gmail.com",
        phone: 50001009,
        address: "ul. Jakaśtak 69/98"
    }, {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "active",
        email: "xyz@gmail.com",
        phone: 50020009,
        address: "ul. Jakaśtak 69/98"
    }, 
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "pending",
        email: "xyz@gmail.com",
        phone: 50000009,
        address: "ul. Jakaśtak 69/98"
    },
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "pending",
        email: "xyz@gmail.com",
        phone: 50000009,
        address: "ul. Jakaśtak 69/98"
    },
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "pending",
        email: "xyz@gmail.com",
        phone: 50000009,
        address: "ul. Jakaśtak 69/98"
    },
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "pending",
        email: "xyz@gmail.com",
        phone: 50000009,
        address: "ul. Jakaśtak 69/98"
    },
    {
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "pending",
        email: "xyz@gmail.com",
        phone: 50000009,
        address: "ul. Jakaśtak 69/98"
    },{
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "inactive",
        email: "xyz@gmail.com",
        phone: 50001009,
        address: "ul. Jakaśtak 69/98"
    },{
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "inactive",
        email: "xyz@gmail.com",
        phone: 50001009,
        address: "ul. Jakaśtak 69/98"
    },{
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "inactive",
        email: "xyz@gmail.com",
        phone: 50001009,
        address: "ul. Jakaśtak 69/98"
    },{
        id: nanoid(),
        username: "Kowalski",
        img: "https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_960_720.jpg",
        status: "inactive",
        email: "xyz@gmail.com",
        phone: 50001009,
        address: "ul. Jakaśtak 69/98"
    },
];
