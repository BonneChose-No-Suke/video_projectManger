import Image from 'next/image';
import projectCard_red from '@/public/images/projects/project_red.png';
import { HiDotsHorizontal, HiGlobeAlt } from 'react-icons/hi';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';

export const ProjectCard = () => {
  return (
    <div className='relative'>
      <div className='absolute top-9 left-4 w-[85%] items-center flex justify-between'>
        <p className='text-md font-bold text-white'>Sample Project</p>
        <Popover>
          <PopoverTrigger asChild>
            <button onClick={() => console.log('clicked')}>
              <HiDotsHorizontal color='fff' size={24} />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div>Control Panel</div>
          </PopoverContent>
        </Popover>
      </div>
      <div className='absolute bottom-3 left-4 w-[85%] items-center flex justify-between'>
        <div className='text-xs text-white font-light'>
          {displayName('UserName or TeamName')}
        </div>
        <div className='flex items-center gap-1'>
          <HiGlobeAlt color='fff' size={12} />
          <p className='text-xs font-semibold text-white'>Private</p>
        </div>
      </div>
      <Image
        src={projectCard_red}
        alt='project_card'
        width={210}
        height={175}
      />
    </div>
  );
};

const displayName = (name: string) =>
  name.length > 8 ? name.slice(0, 8) + '...' : name;
