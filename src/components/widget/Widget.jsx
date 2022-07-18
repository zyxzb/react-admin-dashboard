
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

//styles
import './Widget.scss';

const Widget = ({type}) => {

    let data;

    //temporary data:
        const amount = 200;
        const diff = 20;

    switch(type) {
        case "user":
        data={
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon: <PersonOutlineIcon className='icon' />,
        };
        break;

        case "order":
        data={
            title:"ORDERS",
            isMoney: false,
            link:"View all orders",
            icon: <ShoppingCartCheckoutIcon className='icon' />,
        };
            break;

        case "earnings":
        data={
            title:"EARNINGS",
            isMoney: true,
            link:"View earnings",
            icon: <MonetizationOnIcon className='icon' />,
        };
        break;

        case "balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link:"See details",
            icon: <AccountBalanceWalletIcon className='icon' />,
        };
        break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"}{amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="precentage positive">
                    <KeyboardArrowUpIcon/>
                    {/* <KeyboardArrowDownIcon/> */}
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
