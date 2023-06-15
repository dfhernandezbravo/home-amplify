import { TitleStruct } from "./Title.types";


const Title = ( { text } : TitleStruct) =>{
    return (
        <>
            <h2>{text}</h2>
        </>
    )
}

export default Title;