export default function Headspace(){
    return (
        <>
        <div className=" flex       justify-center">
                <p className=" text-2xl">
                    CALCULATOR
                </p>
            </div>
            <Screen/>
        </>
    );
}

export function Screen(){
    return(
        <section >
            <div className=" w-full px-5 py-5 mt-32 text-right text-2xl text-green-200 border">
                <p>99999question</p>
            </div>
            <div className=" w-full px-5 py-5 text-right text-6xl">
            <p>99999res</p>
            </div>
        </section>
    );
}