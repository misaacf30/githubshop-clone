'use client'

import { useEffect, useState } from "react"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const MobileFilterBar = () => {
  const [open, setOpen] = useState(true);   // should be false so component doesn't fetch data

  const [categories, setCategories] = useState<any[]>([]);
  const [sizes, setSizes] = useState<any[]>([]);
  const [colors, setColors] = useState<any[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<any[]>([]);
  const [selectedColors, setSelectedColors] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (open) {   // or window.innerWidth < 838 ???
      const newParams = new URLSearchParams(searchParams);

      const categoriesArray: string[] = [];
      const sizesArray: string[] = [];
      const colorsArray: string[] = [];

      newParams.forEach((value, key) => {     // don't update state inside loop!!
        if (key === 'category') {
          categoriesArray.push(value);
        }
        else if (key === 'size') {
          sizesArray.push(value);
        }
        else if (key === 'color') {
          colorsArray.push(value);
        }
      })

      setSelectedCategories(categoriesArray);
      setSelectedSizes(sizesArray);
      setSelectedColors(colorsArray);
      setLoading(false);
    }

  }, [])

  // fetch only if mobile !!!

  useEffect(() => {
    if (!loading) {
      let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/product-categories?fields[0]=title&fields[1]=slug`

      if (selectedSizes.length === 1) url += `&filters[products][product_sizes][slug][$eq]=${selectedSizes[0]}`
      else if (selectedSizes.length > 1) selectedSizes.map((size: string) => url += `&filters[products][product_sizes][slug][$eq]=${size}`)

      if (selectedColors.length === 1) url += `&filters[products][product_colors][slug][$eq]=${selectedColors[0]}`
      else if (selectedColors.length > 1) selectedColors.map((color: string) => url += `&filters[products][product_colors][slug][$eq]=${color}`)

      fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN_FILTERS}`
        }
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setCategories(data);
        })
    }
  }, [selectedSizes, selectedColors, loading])

  useEffect(() => {
    if (!loading) {
      let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/product-sizes?fields[0]=name&fields[1]=code&fields[2]=slug`

      if (selectedCategories.length === 1) url += `&filters[products][product_category][slug][$eq]=${selectedCategories[0]}`
      else if (selectedCategories.length > 0) selectedCategories.map((category: string) => url += `&filters[products][product_category][slug][$eq]=${category}`)

      if (selectedColors.length === 1) url += `&filters[products][product_colors][slug][$eq]=${selectedColors[0]}`
      else if (selectedColors.length > 1) selectedColors.map((color: string) => url += `&filters[products][product_colors][slug][$eq]=${color}`)

      fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN_FILTERS}`
        }
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setSizes(data);
        })
    }
  }, [selectedCategories, selectedColors, loading])

  useEffect(() => {
    if (!loading) {
      let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/product-colors?fields[0]=name&fields[1]=slug`

      if (selectedCategories.length === 1) url += `&filters[products][product_category][slug][$eq]=${selectedCategories[0]}`
      else if (selectedCategories.length > 0) selectedCategories.map((category: string) => url += `&filters[products][product_category][slug][$eq]=${category}`)

      if (selectedSizes.length === 1) url += `&filters[products][product_sizes][slug][$eq]=${selectedSizes[0]}`
      else if (selectedSizes.length > 1) selectedSizes.map((size: string) => url += `&filters[products][product_sizes][slug][$eq]=${size}`)

      fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN_FILTERS}`
        }
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setColors(data);
        })
    }
  }, [selectedCategories, selectedSizes, loading])


  const checkSelected = (filterType: string, value: string) => {
    if (filterType === 'category') {
      if (selectedCategories.includes(value))
        return true;
      else
        return false;
    }
    else if (filterType === 'size') {
      if (selectedSizes.includes(value))
        return true;
      else
        return false;
    }
    else if (filterType === 'color') {
      if (selectedColors.includes(value))
        return true;
      else
        return false;
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      if (event.target.name === 'category' && !selectedCategories.includes(event.target.value)) {
        setSelectedCategories([...selectedCategories, event.target.value]);
      }
      else if (event.target.name === 'size' && !selectedSizes.includes(event.target.value)) {
        setSelectedSizes([...selectedSizes, event.target.value]);
      }
      else if (event.target.name === 'color' && !selectedColors.includes(event.target.value)) {
        setSelectedColors([...selectedColors, event.target.value]);
      }
    }
    else {
      if (event.target.name === 'category') {
        setSelectedCategories(selectedCategories.filter(category => category !== event.target.value));
      }
      else if (event.target.name === 'size') {
        setSelectedSizes(selectedSizes.filter(size => size !== event.target.value));
      }
      else if (event.target.name === 'color') {
        setSelectedColors(selectedColors.filter(color => color !== event.target.value));
      }
    }
  }

  useEffect(() => {
    if (open)
        document.body.classList.add('overflow-y-hidden');
    else
        document.body.classList.remove('overflow-y-hidden');

    return () => {
        document.body.classList.remove('overflow-y-hidden');
    }
}, [open])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 838) {
        setOpen(false);
      }
      else {
        // do something here
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div>
      {/* FIlter Bar */}
      <div className={`${!open && 'hidden'} bg-white fixed w-screen h-screen max-w-[837px] top-0 left-0 right-0 z-30`}>
        <div className='flex flex-col h-full'>

          {/* Title: Filters */}
          <div className='flex-none h-auto px-[24px] py-[16px] border-b-[1px] flex justify-between'>
            <div className='flex flex-row items-center'>
              <span className='text-[24px] '>
                &#8801;
              </span>
              <h2 className='text-[16px]  font-bold tracking-[0.5px] leading-[18px] block'>
                &nbsp;&nbsp;Filters
              </h2>

            </div>

            <button
              onClick={() => setOpen(false)}
              className='text-[20px]'
            >
              X
            </button>
          </div>

          {/* Filter types */}
          <div className="grow overflow-y-auto px-[24px] py-[12px]">

            {/* Selected filters */}
            {(selectedCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0) && (
              <div className='block  tracking-normal leading-[20px]'>
                <h3 className='text-[14px] font-bold py-[12px] border-b-[1px]'>
                  Selected filters
                </h3>
                <ul className='flex flex-wrap items-center text-[14px] py-[10px]'>
                  {selectedCategories.map((item, index) => (
                    <li key={`${item}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                      <button
                        onClick={() => setSelectedCategories(selectedCategories.filter(category => category !== item))}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                      >
                        {item}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                      </button>
                    </li>
                  ))}
                  {selectedSizes.map((item, index) => (
                    <li key={`${item}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                      <button
                        onClick={() => setSelectedSizes(selectedSizes.filter(size => size !== item))}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                      >
                        {item.toUpperCase()}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                      </button>
                    </li>
                  ))}
                  {selectedColors.map((item, index) => (
                    <li key={`${item}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                      <button
                        onClick={() => setSelectedColors(selectedColors.filter(color => color !== item))}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                      >
                        {item}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                      </button>
                    </li>
                  ))}
                  <li className=' mr-[10px] mb-[10px]'>
                    <button
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedSizes([]);
                        setSelectedColors([]);
                      }}
                      className='text-[12px] text-[#4a4a4a] decoration-[#4a4a4a] underline py-[4px]'
                    >
                      Clear all
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Categories */}
            {(categories && categories.length > 0) && (
              <div className='block'>
                <button
                  onClick={() => console.log()}
                  className='text-[14px] py-[12px] tracking-normal leading-[20px] w-full flex justify-between
                                    border-b-[1px]'
                >
                  <div className='flex'>
                    <h3 className="font-bold">Category &nbsp;</h3>
                    {selectedCategories.length > 0 && <span className='text-[#494949] font-semibold'>({selectedCategories.length})</span>}
                  </div>

                  <div className='text-[24px] font-extralight'>
                    {'>'}
                  </div>
                </button>
                <ul className={`text-[14px] text-[#494949] py-[10px] ${!categories && 'hidden'}`}>
                  {categories.map((category: any, index: number) => (
                    <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                      <label className='cursor-pointer'>
                        <input
                          type="checkbox"
                          name="category"
                          value={category.slug}
                          checked={checkSelected('category', category.slug)}
                          onChange={onChange}
                          className='cursor-pointer mr-[5px]'
                        />
                        <span className='tracking-[0.5px] leading-[14px]'>{category.title}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sizes */}
            {(sizes && sizes.length > 0) && (
              <div className='block'>
                <button
                  onClick={() => console.log()}
                  className='text-[14px] py-[12px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                >
                  <div className='flex'>
                    <h3 className='font-bold'>Size &nbsp;</h3>
                    {selectedSizes.length > 0 && <span className='text-[#494949] font-semibold'>({selectedSizes.length})</span>}
                  </div>

                  <div className='text-[24px] font-extralight'>
                    {'>'}
                  </div>
                </button>
                <ul className={`text-[14px] text-[#494949] py-[10px] ${!sizes && 'hidden'}`}>
                  {sizes.map((size: any, index: number) => (
                    <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                      <label className='cursor-pointer'>
                        <input
                          type="checkbox"
                          name="size"
                          value={size.slug}
                          checked={checkSelected('size', size.slug)}
                          onChange={onChange}
                          className='cursor-pointer mr-[5px] '
                        />
                        <span className='tracking-[0.5px] leading-[14px]'>{size.code}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Colors */}
            {(colors && colors.length > 0) && (
              <div className='block'>
                <button
                  onClick={() => console.log()}
                  className='text-[14px] py-[12px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                >
                  <div className='flex'>
                    <h3 className='font-bold'>Color &nbsp;</h3>
                    {selectedColors.length > 0 && <span className='text-[#494949] font-semibold'>({selectedColors.length})</span>}
                  </div>

                  <div className='text-[24px] font-extralight'>
                    {'>'}
                  </div>
                </button>
                <ul className={`text-[14px] text-[#494949] py-[10px] ${!colors && 'hidden'}`}>
                  {colors.map((color: any, index: number) => (
                    <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start '>
                      <label className='cursor-pointer'>
                        <input
                          type="checkbox"
                          name="color"
                          value={color.slug}
                          checked={checkSelected('color', color.slug)}
                          onChange={onChange}
                          className='cursor-pointer mr-[5px] '
                        />
                        <span className='tracking-[0.5px] leading-[14px]'>{color.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Button: Show resuts */}
          <div className='bg-gray-white z-40 flex-none h-auto p-[24px] border-t-[1px]'>
            <Link
              onClick={() => setOpen(false)}
              href={""}
              className='text-[14px] font-bold text-white bg-[#3a3a3a] w-full h-[40px] text-center items-center rounded-[1000px] px-[24px] flex justify-center whitespace-nowrap'
            >
              Show results
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
