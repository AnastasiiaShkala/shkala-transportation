import dataServices from "../../data/dataServices";
import Service from "./Service";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/servicesSlice";

const Services = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (<div>
            {dataServices
            .filter (service => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === service.category;
            })
            .map(service => <Service key={service.id} service={service}/>)}
        </div>
    )
}
export default Services;