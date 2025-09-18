import React, {useState, useContext} from 'react';
import { Tooltip, Grow } from '@mui/material';
import { watchlist } from '../data/data';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from './DoughnutChart';
function WatchList() {
  const labels = watchlist.map(item => item["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Watchlist Prices',
        data: watchlist.map(item => item.price),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        hoverOffset: 4
      }
    ]
  };  
     return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((item,index) =>{
            return (
                <WatchListItem item={item} key={index}/>              
            )
        })}
      </ul>
        <DoughnutChart data={data}/>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({item,index}) => {
  const [showWatchListIcons, setShowWatchListIcons] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListIcons(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListIcons(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='item'>
        <p className={item.isDown ? 'down' : 'up' }>{item.name}</p>
          <div className='itemInfo'>
            <span className='percent'>{item.percent}</span>
            {item.isDown ? ( 
              <KeyboardArrowDown className='down'/>)
            : (
              <KeyboardArrowUp className='down'/>
            )
            }
            <span className='price'>{item.price}</span>
          </div>
      </div>
        {showWatchListIcons && <WatchListActions uid={index}/>}
    </li>
  )
}

const WatchListActions = ({uid}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className = 'actions'>
     <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
        onClick={handleBuyClick}
        >
          <button className="buy">B</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
        >
          <button className="sell">S</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip 
          title="More" 
          placement="top" 
          arrow 
          >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}