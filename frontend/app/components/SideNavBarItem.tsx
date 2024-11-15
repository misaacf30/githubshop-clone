import Link from "next/link"

interface Props {
  navItem: string,
  subNavItems: string[],
  navId: string,
  setNavId(id: string): void,
}

export const SideNavBarItem = ({ navItem, subNavItems, navId, setNavId }: Props) => {
  return (
    <li className='leading-[40px]'>
      <div className='flex justify-between px-[10px] py-[8px] cursor-pointer'
        onClick={() => {
          navId !== navItem ? setNavId(navItem) : setNavId('')
        }}
      >
        <Link href={''}>
          <span className='text-[16px] text-[#232323] font-semibold'>
            {navItem}
          </span>
        </Link>
        <span className={`${subNavItems.length === 0 && 'hidden'} `}
        >
          {
            (navId !== navItem) ? '>' : '<'
          }
        </span>
      </div>

      <ul className={`text-[16px] text-[#575757] font-semibold leading-normal border-t border-[#f7f7f7] h-full ${(navId !== navItem || subNavItems.length === 0) && 'h-0 hidden'} `}>
        {
          subNavItems.map((item, index) =>
            <li key={index} className='pl-[35px] py-[10px]'>{item}</li>
          )
        }
      </ul>
    </li>
  )
}
