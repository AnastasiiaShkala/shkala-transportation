import { AcordionItem } from "./AcordionItem";
import { list } from "./list";
import './style.css';

export const Acordion=() => {
    return(<div>
        {list.map((item, index) =>
        <AcordionItem key={item.title} title={item.title} content={item.content}/>
        )}
    </div>)
    
}