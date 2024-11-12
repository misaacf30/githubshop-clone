import { getCategories } from "../lib/get-categories"

export const Categories = async () => {
  const categories = await getCategories()
  
  if(categories === null ) return null

  return (
    <div>
        <div>All categories</div>
        {
        categories.map((category : any, index : number) => (
            <div key={index}>
                <h1>{category.name}</h1>
                <p>{category.description}</p>
                <img src={category.image} />    
            </div>
        ))
        }
        
    </div>
  )
}
