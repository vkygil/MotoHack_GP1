import { useEffect, useState } from "react";
import { motoServices } from "../../data_API/motoServices";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { Sidebar } from "../Sidebar";

export function List() {
    const [motoList, setMotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllData();
    }, []
    );

    const getAllData = () => {
        setIsLoading(true)
        let res = motoServices.getAllMotos()

        setMotoList(res);
        setIsLoading(false)

    }

    return (
        <div>
            <div class="col-md-8">
                <section className="cardList">

                    {isLoading ? <Loader /> : ''}

                    {motoList.map((moto, key) =>
                        <Card key={key} moto={moto} getAllData={getAllData} />
                    )}

                </section>
            </div>
            <Sidebar />
        </div>
    )
}
