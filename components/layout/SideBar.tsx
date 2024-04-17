'use client';

import { useSession } from 'next-auth/react';
import { FC } from 'react';
import {
  HiChevronRight,
  HiUser,
  HiHome,
  HiSpeakerphone,
  HiUsers,
} from 'react-icons/hi';

export const SideBar = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <div className='w-48 h-full bg-stone-100 px-3 py-6 max-[960px]:hidden'>
        <div className='ml-3 mt-2 mb-1 text-2xl font-bold flex justify-start'>
          Icon
        </div>
        <div className='flex flex-col my-3'>
          <NavigationItem item='user' active={false} />
          <NavigationItem item='home' active={true} />
          <NavigationItem item='project' active={false} />
          <NavigationItem item='team' active={false} />
        </div>
      </div>
    </>
  );
};

const NavigationItem: FC<{ item: string; active: boolean }> = ({
  item,
  active,
}) => {
  return (
    <div className='flex justify-between items-center px-2 py-4 transition-colors duration-300 hover:bg-stone-300/30  hover:rounded-md'>
      <NavIcon
        item={item}
        size={'21'}
        color={active ? '#E3483FE6' : '#78716c'}
      />
      <div
        className={`grow text-xs ${
          active ? 'font-bold text-stone-950' : 'text-stone-700'
        }`}>
        {getText(item)}
      </div>
      {item !== 'home' && (
        <HiChevronRight color='#78716c' style={{ marginLeft: '8px' }} />
      )}
    </div>
  );
};

const NavIcon: FC<{ item: string; size: string; color: string }> = ({
  item,
  size,
  color,
}) => {
  switch (item) {
    case 'user':
      return (
        <HiUser size={size} color={color} style={{ marginRight: '10px' }} />
      );
    case 'home':
      return (
        <HiHome size={size} color={color} style={{ marginRight: '10px' }} />
      );
    case 'project':
      return (
        <HiSpeakerphone
          size={size}
          color={color}
          style={{ marginRight: '10px' }}
        />
      );
    case 'team':
      return (
        <HiUsers size={size} color={color} style={{ marginRight: '10px' }} />
      );
    default:
      null;
  }
};

const getText = (item: string) => {
  switch (item) {
    case 'user':
      return 'ユーザー';
    case 'home':
      return 'ホーム';
    case 'project':
      return 'プロジェクト';
    case 'team':
      return 'チーム';
    default:
      null;
  }
};
