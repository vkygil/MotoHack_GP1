import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";

export function SearchList({searchList,setShowSearch}){
    const navigate = useNavigate();

    return(
        <section className="searchList">

            <button onClick={()=>navigate(-0)&&setShowSearch(false)} className="back_btn">
                <i class="fa-solid fa-arrow-left"></i>
            </button>

            {searchList.length === 0? <h1 className="search_info">Not results</h1> 
            : searchList.length === 1? <h1 className="search_info">We have 1 result for you</h1> 
            : <><h1 className="search_info">{`We have ${searchList.length} results for you`}</h1> 

                {searchList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )}

            </>               
            }
        

        </section>
    )
}