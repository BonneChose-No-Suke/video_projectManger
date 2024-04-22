'use client';
import Image from 'next/image';
import add_project from '@/public/images/projects/add_project.png';
import { ProjectCard } from '@/components/projects/ProjectCard';

export default function Page() {
  return (
    <div className='w-10/12 max-w-4xl ml-8 mt-8'>
      <h1 className='text-lg font-semibold text-stone-900 mb-6'>
        プロジェクト一覧
      </h1>
      <div className='text-sm font-semibold text-stone-600 mb-6'>
        新しくプロジェクトを始めたり、すでにあるプロジェクトを管理できます。
      </div>
      <div className="content-[''] display-block h-[1px] w-full bg-stone-300" />
      <div className='flex flex-wrap gap-x-8 gap-y-6 pt-14 '>
        <button onClick={() => console.log('added a new project')}>
          <Image
            src={add_project}
            alt='add_newProject'
            width={210}
            height={175}
          />
        </button>
        <ProjectCard />
      </div>
    </div>
  );
}
