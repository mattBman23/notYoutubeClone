import React from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

export const HeaderComp = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="logo"
        class="header__logo"
      />

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit ">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div class="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="avatar"
        />
      </div>
    </div>
  );
};
