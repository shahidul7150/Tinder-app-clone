import React from 'react';
import './SwipeButtons.css'
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
   return (
      <div className="swipeButtons">
         <IconButton  className="swipedButtons__repeat">
            <ReplyIcon fontSize="large"/>
         </IconButton>

         <IconButton className="swipedButtons__left">
            <CloseIcon fontSize="large"/>
         </IconButton>

         <IconButton  className="swipedButtons__star">
            <StarRateIcon fontSize="large"/>
         </IconButton>

         <IconButton  className="swipedButtons__right">
            <FavoriteIcon fontSize="large"/>
         </IconButton>

         <IconButton  className="swipedButtons__lightning">
            <FlashOnIcon fontSize="large"/>
         </IconButton>
         

      </div>
   );
}

export default SwipeButtons;