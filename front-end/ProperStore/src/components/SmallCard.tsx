
 export interface SneakerProps {
    id?: number,
    name: string, 
    price: number,
    description?: string,
    image: string, 
    size?: {
        id: number,
        sneaker_size: number
    },
    brand: {
        id: number,
        name: string
    },
    condition: {
        id: number, 
        condition: number,
        istnew: boolean
    }
}

export const SmallCard = (props:SneakerProps) => {
 
    return( 
        <div className="flex flex-col border-[1px] rounded-xl hover:border-[#1C6382] hover:border-[2px] transition-all">
            <div>
                <img src={props.image} className="bg-center w-40 h-40 rounded-t-lg bg-contain"/>
                </div>
            <div className="flex flex-col mx-2 ">
                <h1 className="text-md  text-gray-800 uppercase ">{props.name}</h1>
                <h2 className="font-bold italic ">R$ {props.price}</h2>
                <h3 className="text-right text-sm text-gray-600 opacity-50 italic">{props.brand.name} - Cond: {props.condition.condition}</h3>
                </div>

        </div>
    )
}