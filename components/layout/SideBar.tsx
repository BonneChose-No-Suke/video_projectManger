'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FC } from 'react';
import {
  HiChevronRight,
  HiHome,
  HiSpeakerphone,
  HiUserCircle,
  HiUserGroup,
} from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';

export const SideBar = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className='w-52 h-full bg-stone-50 pr-1 pl-3 py-6 max-[960px]:hidden'>
        <div className='ml-3 mt-2 mb-1 text-2xl font-bold flex justify-start'>
          Icon
        </div>
        <div className='flex flex-col my-3'>
          <NavigationItem item='user' />
          <NavigationItem item='home' />
          <NavigationItem item='project' />
          <NavigationItem item='team' />
        </div>
      </div>
    </>
  );
};

const NavigationItem: FC<{ item: string }> = ({ item }) => {
  const pathName = usePathname();
  const isActive = pathName.split('/')[1] === getPageName(item);
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={'/' + getPageName(item)}>
          <div className='flex justify-between text-left items-center px-2 py-4 transition-colors duration-300 hover:bg-stone-300/30  hover:rounded-md'>
            <NavIcon
              item={item}
              size={'20'}
              color={isActive ? '#E3483FE6' : '#57534e'}
            />
            <div
              className={`grow text-xs ${
                isActive ? 'font-bold text-stone-950' : 'text-stone-700'
              }`}>
              {getText(item)}
            </div>
            {item !== 'home' && (
              <HiChevronRight color='#78716c' style={{ marginLeft: '8px' }} />
            )}
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        この中身はおいおい実装します
      </HoverCardContent>
    </HoverCard>
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
        <HiUserCircle
          size={size}
          color={color}
          style={{ marginRight: '10px' }}
        />
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
        <HiUserGroup
          size={size}
          color={color}
          style={{ marginRight: '10px' }}
        />
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

const getPageName = (item: string) => {
  switch (item) {
    case 'user':
      return 'mypage';
    case 'home':
      return 'dashboard';
    case 'project':
      return 'projects';
    case 'team':
      return 'team';
    default:
      null;
  }
};
