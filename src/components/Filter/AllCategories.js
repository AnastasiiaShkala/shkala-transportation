import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
           <h1 className="mainHeader"> What kind of service do you like?</h1> 
           {['WEB DEVELOPMENT', 'TRANSPORTATION', 'ALL'].map(category => <Filter key={category.trim().toLowerCase()} category={category}/>
           )}
        </div>
    )
}
export default AllCategories;