import { useEffect, useState } from "react";
import { motoServices } from "../../data_API/motoServices";
import { Card } from "../../components/card/Card";
import { Loader } from "../../components/loader/Loader";
import { Navbar } from "../../components/navbar/Navbar";

export function FavList(){
    const [favList, setFavList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllFavoriteData();
    },[]
    );

    const getAllFavoriteData=()=>{
        setIsLoading(true)
            motoServices.getFavoriteMotos().then(res =>{
                if(!res) return;
                setFavList(res);
                setIsLoading(false)
            })
    }    
    
    return(
        <section>
            <Navbar/>
            
            <div className="favList">
            
                {isLoading? <Loader/> : '' }

                <h1 className="favList_info">{favList.length} favorites </h1>

                {favList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )}   

            </div>
        </section>
    )
}